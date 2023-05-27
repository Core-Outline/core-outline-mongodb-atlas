const http = require('http');
const express = require('express');
const cors = require('cors');
const { serverConfigs } = require('config/index.js');
const bodyParser = require('body-parser');

const startServer = (app) => {
  const server = http.createServer(app);

  server.listen(serverConfigs.port).on('listening', () => {
    console.log(`Server running on ${serverConfigs.port}`);
  });
};

const expressApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};

module.exports = { startServer, expressApp };
