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
app.set('port', 3000);
app.set('json spaces', 2);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


app.use('/api', apiRouter);
apiRouter.route('/characters').get(apiRoutes.displayCharacters);
apiRouter.route('/characters/:id').get(apiRoutes.displayOneCharacter);

app.use('/', appRouter);
appRouter.route('/image/:id').get(appRoutes.displayImage);
appRouter.route('*').get(appRoutes.index);

app.listen(app.get('port'), () => console.log(`Magic happens on port ${app.get('port')}`));





// import 'angular2-universal/polyfills';
// import * as path from 'path';
// import * as express from 'express';
// import { provideRouter } from '@angular/router';
// import { enableProdMode } from '@angular/core';
// import {
//   expressEngine,
//   BASE_URL,
//   REQUEST_URL,
//   ORIGIN_URL,
//   NODE_LOCATION_PROVIDERS,
//   NODE_HTTP_PROVIDERS,
//   ExpressEngineConfig
// } from 'angular2-universal';

// import {App, routes} from './app';

// const app = express();
// const ROOT = path.join(path.resolve(__dirname, '..'));

// const apiRouter = express.Router();
// const apiRoutes = require('./routes/api-routes');

// app.engine('.html', expressEngine);
// app.set('views', __dirname);
// app.set('view engine', 'html');
// app.set('port', 3000);
// app.set('json spaces', 2);

// function ngApp(req, res) {
//   let baseUrl = '/';
//   let url = req.originalUrl || '/';

//   let config = {
//     directives: [ App ],

//     // dependencies shared among all requests to server
//     platformProviders: [
//       {provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
//       {provide: BASE_URL, useValue: baseUrl},
//     ],

//     // dependencies re-created for each request
//     providers: [
//       {provide: REQUEST_URL, useValue: url},
//       provideRouter(routes),
//       NODE_LOCATION_PROVIDERS,
//       NODE_HTTP_PROVIDERS,
//     ],

//     // if true, server will wait for all async to resolve before returning response
//     async: true,

//     // if you want preboot, you need to set selector for the app root
//     // you can also include various preboot options here (explained in separate document)
//     preboot: false // { appRoot: 'app' }
//   };

//   res.render('index', config);
// }

// // Serve static files
// app.use(express.static(ROOT, {index: false}));

// // send all requests to Angular Universal
// // if you want Express to handle certain routes (ex. for an API) make sure you adjust this
// app.get('/', ngApp);
// app.get('/characters', ngApp);
// // app.get('/characters:id', ngApp);

// app.use('/api', apiRouter);
// apiRouter.route('/characters').get(apiRoutes.displayCharacters);

// // Server
// app.listen(app.get('port'), () => console.log(`Magic happens on port ${app.get('port')}`));

