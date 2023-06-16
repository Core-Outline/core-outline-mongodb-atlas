const { createDataSource, retrieveDataSources, getDataSource } = require('services/index.js');
const { schema } = require('lib/index.js');
const { createDataSourceSchema, findDataSources, findDataSource } = require('./req-schema.js');

const create = (req, res) => {
  const result = schema.validateSchema(
    { ...req.body, ...{ type: 'mongodb' } },
    createDataSourceSchema,
  );
  return createDataSource(result, res);
};

const retrieve = (req, res) => {
  const result = schema.validateSchema(req.query, findDataSources);
  return retrieveDataSources(result, res);
};

const get = (req, res) => {
  const result = schema.validateSchema(req.query, findDataSource);
  return getDataSource(result, res);
};

module.exports = {
  create,
  retrieve,
  get,
};
