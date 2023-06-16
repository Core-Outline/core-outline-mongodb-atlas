const { mongo } = require('lib/index.js');
const { dataSourceSchema } = require('models/index.js');

const createDataSource = async ({ value, error }, res) => {
  await mongo.connDataSourceDB(
    `${String(value.url).replace('username', value.username).replace('password', value.password)}`,
  );
  return await mongo.create(dataSourceSchema, value);
};

module.exports = createDataSource;
