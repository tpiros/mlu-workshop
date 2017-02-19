const fs           = require('fs');
const path         = require('path');
const Promise      = require('bluebird');
const marklogic    = require('marklogic');
const settings     = require('../settings/settings');
const request      = Promise.promisify(require('request'));

const db           = marklogic.createDatabaseClient(settings);
const indexConfig  = JSON.parse(fs.readFileSync(path.join(__dirname, 'index-config.json'), 'utf8'));
const databaseName = 'Documents';
const jsonPath     = path.join(__dirname, '..', 'data', 'json');
const imagePath    = path.join(__dirname, '..', 'data', 'image');
const files        = fs.readdirSync(jsonPath);
const images       = fs.readdirSync(imagePath);
const batchSize    = 10;

const requestAsync = (
  endpoint,
  method,
  json,
  host = settings.host,
  port = settings.restPort,
  user = settings.user,
  password = settings.password
) => {
  const baseURL = `http://${host}:${port}`;
  return request({
    url: baseURL + endpoint,
    method,
    auth: {
      user,
      password,
      sendImmediately: false
    },
    headers: {
      'Content-type': 'application/json'
    },
    json
  });
};

let readFile;

const writeBatch = (filenames, batchFirst) => {
  if (path.extname(filenames[0]) === '.json') {
    if (batchFirst >= filenames.length) {
      console.info(`Example data (${filenames.length} JSON documents) loaded`);
    }
  }

  if (path.extname(filenames[0]) === '.png') {
    if (batchFirst >= filenames.length) {
      console.info(`Example data (${filenames.length} PNG documents) loaded`);
    }
  }

  const batchLast = Math.min(batchFirst + batchSize, filenames.length) - 1;

  const buffer = [];
  for (let i = batchFirst; i <= batchLast; i += 1) {
    readFile(filenames, i, buffer, (i === batchLast));
  }
};

readFile = (filenames, i, buffer, isLast) => {
  const filename = filenames[i];
  let uri;
  const collections = [];
  let content;
  if (path.extname(filename) === '.json') {
    content = fs.readFileSync(`${jsonPath}/${filename}`, 'utf8').toString();
    uri = `/characters/${filename}`;
    collections.push('characters');
  }

  if (path.extname(filename) === '.png') {
    content = fs.readFileSync(`${imagePath}/${filename}`);
    uri = `/image/${filename}`;
    collections.push('images');
  }

  buffer.push({
    uri,
    collections,
    content
  });

  if (isLast) {
    console.info(`Loading batch from ${buffer[0].uri} to ${filename}`);
    db.documents.write(buffer).result((response) => {
      response.documents.map(document => console.info(`Loaded ${document.uri}`));
      writeBatch(filenames, i + 1);
    });
  }
};


requestAsync(`/manage/v2/databases/${databaseName}/properties`, 'PUT', indexConfig)
.then((response) => {
  if (response.statusCode === 204) {
    console.info(`${response.statusCode} - Indexes created`);
  } else {
    console.info(`Response status: ${response.statusMessage}`);
  }
})
.then(() => {
  writeBatch(files, 0);
  writeBatch(images, 0);
})
.catch(error => console.error(error));
