const marklogic = require('marklogic');
const settings = require('../settings/settings');
const db = marklogic.createDatabaseClient(settings);
const qb = marklogic.queryBuilder;

const displayCharacters = (req, res) => {
  let result = [];
  db.documents.query(
    qb.where(
      qb.collection('characters')
    )
    .calculate(qb.facet('homeworld', qb.facetOptions('frequency-order', 'descending')))
    .withOptions({ categories: 'none' })
    .slice(0, 30)
  ).result()
  .then(characters => {
    const facets = characters[0].facets.homeworld.facetValues
    result = facets.map(facet => (
      { 
        name: facet.name,
        count: facet.count
      }
    ));
    return facets;
  })
  .then((facets) => {
    let result = {};
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

    query.then(characters => {
      let result = {
        characters,
        facets
      };
      res.json(result);
    });
  })
  .catch(error => console.log(error));
};

const displayOneCharacter = (req, res) => {
  const uri = `/characters/${req.params.id}`;
  db.documents.read(uri).result()
  .then(character => {
    return res.json(character[0])
  })
  .catch(error => console.log(error));
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
}

// const suggestions = (req, res) => {
//   if (req.query.term) {
//     const term = req.query.term;
//     db.documents.suggest(term,
//       qb.where(
//         qb.collection('characters'),
//         qb.parsedFrom('',
//           qb.parseBindings(
//             qb.range('name', qb.bindDefault())
//           )
//         )
//       )
//       .slice(0, 30)
//     ).result().then(data => {
//       console.log(data);
//       if (data.length !== 0) {
//         // let result = [];
//         // result = data.map(item => {
//         //   item = item.substring(item.indexOf('"') + 1);
//         //   return item.replace(/"/g, "")
//         // });
//         // console.log(result);
//         // return res.json(result);
//         return res.json(data);
//       } else {
//         res.json([]);
//       }
//     });
//   }
// };

module.exports = {
  displayCharacters,
  displayOneCharacter,
  search
  // suggestions
};