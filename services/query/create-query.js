const { mongo } = require('lib/index.js');
const { querySchema } = require('models/index.js');

const createQuery = async ({ value, error }, res) => {
  await mongo.create(querySchema, value);
};

module.exports = createQuery;
