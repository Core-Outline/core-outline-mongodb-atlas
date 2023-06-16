const { mongo } = require('lib/index.js');

const executeQuery = async ({ value, error }, res) => {
  const { username, password, database, queries, reference_table, reference_column } = value;
  const connection = await mongo.connDataSourceDB(
    `${String(value.url).replace('username', username).replace('password', password)}`,
  );
  const db = connection.db(`${database}`);
  const collection = db.collection(`${reference_table}`);
  console.log('This is the queries', queries);

  const output = await collection
    .find({
      $and: queries,
    })
    .toArray((err, documents) => {
      if (err) {
        console.error('Error finding documents:', err);
        return;
      }
      if (documents) {
        console.log('These are the documents', documents);
        return documents;
      }
    });
  console.log('This is the collection', output);
  return output.map((val) => val);
};

module.exports = executeQuery;
