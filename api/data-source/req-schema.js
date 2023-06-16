const joi = require('joi');

const { schema } = require('lib/index.js');

const createDataSourceSchema = schema.defineSchema({
  data_source_name: joi.string().alphanum().min(4).max(40).required(),
  username: joi.string().required(),
  password: joi.string().alphanum().required(),
  user_id: joi.string().required(),
  url: joi.string().required(),
});

const findDataSources = schema.defineSchema({
  user_id: joi.string().alphanum().required(),
  data_source_id: joi.string(),
});

const findDataSource = schema.defineSchema({
  id: joi.string().alphanum().required(),
});

module.exports = {
  createDataSourceSchema,
  findDataSources,
  findDataSource,
};
