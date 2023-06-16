const createDataSource = require('./data-source/create-data-source');
const { retrieveDataSources, getDataSource } = require('./data-source/retrieve-data-sources');
const createQuery = require('./query/create-query');
const { retrieveQueries, getQuery } = require('./query/retrieve-query');
const executeQuery = require('./query/execute-query');

module.exports = {
  createDataSource,
  retrieveDataSources,
  getDataSource,
  createQuery,
  retrieveQueries,
  getQuery,
  executeQuery,
};
