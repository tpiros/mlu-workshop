const marklogic = require('marklogic');
const settings = require('../settings/settings');
const db = marklogic.createDatabaseClient(settings);
const qb = marklogic.queryBuilder;

const displayCharacters = (req, res) => {
  db.documents.query(
    qb.where(
      qb.collection('characters')
    )
    .orderBy(qb.sort('name', 'ascending'))
    .slice(0, 30)
  ).result()
  .then(characters => res.json(characters))
  .catch(error => console.log(error));
};

const displayOneCharacter = (req, res) => {
  const uri = `/characters/${req.params.id}`;
  db.documents.read(uri).result()
  .then(character => res.json(character[0]))
  .catch(error => console.log(error));
}

module.exports = {
  displayCharacters,
  displayOneCharacter
};