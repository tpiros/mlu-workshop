const path = require('path');
const marklogic = require('marklogic');
const settings = require('../settings/settings');

const db = marklogic.createDatabaseClient(settings);

const index = ((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const displayImage = ((req, res) => {
  const uri = `/image/${req.params.id}`;
  res.writeHead(200, { 'Content-type': 'image/png' });
  const data = [];
  db.documents.read(uri).stream('chunked')
  .on('data', chunk => data.push(chunk))
  .on('error', error => console.error(error))
  .on('end', () => {
    let buffer = new Buffer(data.length).fill(0);
    buffer = Buffer.concat(data);
    res.end(buffer);
  });
});

module.exports = {
  index,
  displayImage
};
