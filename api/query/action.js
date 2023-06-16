const { createQuery, retrieveQueries, getQuery, executeQuery } = require('services/index.js');
const { schema } = require('lib/index.js');
const { transformQuery } = require('./transformers.js');
const {
  createQuerySchema,
  getQuerySchema,
  retrieveQueriesSchema,
  executeQuerySchema,
} = require('./req-schema.js');

const create = (req, res) => {
  const result = schema.validateSchema(req.body, createQuerySchema);
  return createQuery(result, res);
};

const retrieve = (req, res) => {
  const result = schema.validateSchema(req.params, retrieveQueriesSchema);
  return retrieveQueries(result, res);
};

const get = (req, res) => {
  const result = schema.validateSchema(req.params, getQuerySchema);
  return getQuery(result, res);
};

const execute = (req, res) => {
  const transformedQueries = transformQuery(req.body);
  const result = schema.validateSchema(transformedQueries, executeQuerySchema);
  return executeQuery(result, res);
};

module.exports = {
  create,
  retrieve,
  get,
  execute,
};
