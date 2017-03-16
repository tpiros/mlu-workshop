# MarkLogic University Workshop

This repository is a full scaled three tiered application using MarkLogic, Angular2 (with TypeScript and SystemJS) and Node.js (ES2015).

## Setting up the project
Please follow these instructions in order to setup the application.

### Setting up MarkLogic
The following steps assume that you already have a MarkLogic instance running. If you need help [installing MarkLogic please read this guide](http://docs.marklogic.com/guide/installation/procedures#id_289620).

## Installing the dependencies
After cloning this repository please make sure you install its dependencies by executing `npm i` in the project's root folder.

## Modify `settings/settings.js`
Please open up the file containing the settings and make sure that they match your system setup:

```javascript
module.exports = {
  host: '192.168.56.200', // an existing MarkLogic host
  port: 8000, // an existing MarkLogic REST API instance port
  restPort: 8002, // do not change
  user: 'admin', // an existing MarkLogic user with the admin role
  password: 'admin' // the password of the aforementioned user
};
```

## Setup the data and indexes
The data (JSON and PNG documents) required by the application is provided in the repository itself. In order to insert the data to the MarkLogic database as well as to add the appropriate indexes please execute `npm run setup` from the project's root folder.

## Start the application
To start the application please execute `npm start`.

(If, for whatever reason you'd like to start your application using `node app.js` make sure that you run `tsc` first to compile the TypeScript code as well.)

### Start the application in "development mode"
To start the application in "development mode" you can execute `npm run startDev`. This will fire up both `nodemon` and `tsc -w` (-w is the watch flag) using the [concurrently](https://www.npmjs.com/package/concurrently) package. In this mode, code modifications to both Node.js and to Angular2 will automatically either resart the Node.js process and/or recompile the TypeScript code. (The changes will be visible once you have refreshed your browser.)

### Linting
ESLint and TSLint have been added to the project - `.eslintrc.json` contains the configuration for linting Node.js code, `tslint.json` contains the configuration for linting TypeScript code.

To execute both of these linters you can run `npm run lint`. (This will execute the two gulp tasks).

#### Disclaimer
The data used to build this application is for non-commercial use in accordance with the Terms of Use from its originating source(s): [http://www.starwars.com/databank](http://www.starwars.com/databank) and [http://starwars.wikia.com/wiki/Main_Page](http://starwars.wikia.com/wiki/Main_Page).
