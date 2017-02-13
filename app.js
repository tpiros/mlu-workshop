'use strict';
const express = require('express');
const app = express();
const appRouter = express.Router();
const apiRouter = express.Router();
const appRoutes = require('./routes/app-routes');
const apiRoutes = require('./routes/api-routes');

const path = require('path');

app.set('port', 3000);
app.set('json spaces', 2);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use('/api', apiRouter);
apiRouter.route('/characters').get(apiRoutes.displayCharacters);
apiRouter.route('/characters/:id').get(apiRoutes.displayOneCharacter);
apiRouter.route('/search').get(apiRoutes.search);
// apiRouter.route('/suggestions').get(apiRoutes.suggestions);

app.use('/', appRouter);
appRouter.route('/image/:id').get(appRoutes.displayImage);
appRouter.route('*').get(appRoutes.index);

app.listen(app.get('port'), () => console.log(`Magic happens on port ${app.get('port')}`));