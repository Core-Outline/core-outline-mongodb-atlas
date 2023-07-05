const { mongo } = require('lib/index.js');
const { getDataSource } = require('./retrieve-data-sources');

const getDatabaseTablesandColumns = async ({ value, error }, res) => {
  const dataSource = await getDataSource({ value, error }, res);
  const connection = await mongo.connDataSourceDB(
    `${String(dataSource.url)
      .replace('username', dataSource.username)
      .replace('password', dataSource.password)}`,
  );
  const admin = connection.db('admin');
  let databases = await admin.admin().listDatabases();
  databases = databases.databases.map((db) => db?.name);
  let result = {};
  await Promise.all(databases.map(async (db) => {
    result[db] = {};
    const database = connection.db(db);
    const collectionList = await database.listCollections().toArray();
  
    await Promise.all(collectionList.map(async (collection) => {
      const columns = await database.collection(collection.name).findOne();
      try {
        result[db][collection.name] = Object.keys(columns).map((col) => col);
      } catch (e) {
        result[db][collection.name] = [];
      }
    }));
  }));
  
  console.log(result);
  return result;

};

module.exports = getDatabaseTablesandColumns;
