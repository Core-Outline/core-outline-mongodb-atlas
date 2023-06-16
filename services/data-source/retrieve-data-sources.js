const { mongo } = require('lib/index.js');
const { dataSourceSchema } = require('models/index.js');

const retrieveDataSources = async ({ value, error }, res) => {
  await mongo.fetch(dataSourceSchema, value);
};

const getDataSource = async ({ value, error }, res) => {
  await mongo.get(dataSourceSchema, value);
};
module.exports = { retrieveDataSources, getDataSource };
