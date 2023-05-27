const joi = require('joi');

const defineSchema = (schema) => joi.object(schema);

const validateSchema = (object, schema) => schema.validate(object);

module.exports = {
  defineSchema,
  validateSchema,
};
