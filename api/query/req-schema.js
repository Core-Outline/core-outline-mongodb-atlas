const joi = require('joi');

const { schema } = require('lib/index');

const createQuerySchema = schema.defineSchema({
  type: joi.string().required(),
  database: joi.string().required(),
  queries: joi.array(),
});

const getQuerySchema = schema.defineSchema({
  id: joi.string().required(),
});

const retrieveQueriesSchema = schema.defineSchema({
  data_source_id: joi.string().required(),
});

const executeQuerySchema = schema.defineSchema({
  database: joi.string().required(),
  ref_table: joi.string().required(),
  queries: joi.array().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  createQuerySchema,
  getQuerySchema,
  retrieveQueriesSchema,
  executeQuerySchema,
};
