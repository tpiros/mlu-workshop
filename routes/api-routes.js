const marklogic = require('marklogic');
const settings = require('../settings/settings');

const db = marklogic.createDatabaseClient(settings);
const qb = marklogic.queryBuilder;

const displayCharacters = (req, res) => {
  db.documents.query(
    qb.where(
      qb.collection('characters')
    )
    .calculate(qb.facet('homeworld', qb.facetOptions('frequency-order', 'descending')))
    .withOptions({ categories: 'none' })
    .slice(0, 30)
  ).result()
  .then((characters) => {
    const facets = characters[0].facets.homeworld.facetValues;
    return facets;
  })
  .then((facets) => {
    let homeworld;
    let query;
    if (req.query.homeworld) {
      homeworld = req.query.homeworld;
    }
    if (homeworld) {
      query = db.documents.query(
        qb.where(
          qb.collection('characters'),
          qb.parsedFrom(`homeworld:"${decodeURI(homeworld)}"`,
            qb.parseBindings(
              qb.value('homeworld', qb.bind('homeworld'))
            )
          )
        )
        .orderBy(qb.sort('name', 'ascending'))
        .slice(0, 30)
      ).result();
    } else {
      query = db.documents.query(
        qb.where(
          qb.collection('characters')
        )
        .orderBy(qb.sort('name', 'ascending'))
        .slice(0, 30)
      ).result();
    }

    query.then((characters) => {
      const result = {
        characters,
        facets
      };
      res.json(result);
    });
  })
  .catch(error => console.error(error));
};

const displayOneCharacter = (req, res) => {
  const uri = `/characters/${req.params.id}`;
  db.documents.read(uri).result()
  .then(character => res.json(character[0]))
  .catch(error => console.error(error));
};

const search = (req, res) => {
  if (req.query.term) {
    const term = req.query.term;
    db.documents.query(
      qb.where(
        qb.collection('characters'),
        qb.parsedFrom(term)
      ).slice(0, 30)
    ).result().then(response => res.json(response));
  }
};

module.exports = {
  displayCharacters,
  displayOneCharacter,
  search
};
