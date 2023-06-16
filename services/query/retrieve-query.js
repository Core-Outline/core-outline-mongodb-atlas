const { mongo } = require('lib/index.js');
const { querySchema } = require('models/index.js');

const getQuery = async ({ value, error }, res) => await mongo.get(querySchema, value);

const retrieveQueries = async ({ value, error }, res) => await mongo.fetch(querySchema, value);

module.exports = { getQuery, retrieveQueries };
