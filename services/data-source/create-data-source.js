const { mongo } = require('lib/index.js');
const { dataSourceSchema } = require('models/index.js');

const createDataSource = async ({ value, error }, res) => {
  await mongo.create(dataSourceSchema, value);
};

module.exports = createDataSource;
