const { startServer, expressApp } = require('lib/express/app.js');
const { request } = require('lib/request/app.js');
const mongo = require('lib/mongo/app.js');

const schema = require('lib/validation/app.js');

module.exports = {
  startServer,
  expressApp,
  request,
  schema,
  mongo,
};
