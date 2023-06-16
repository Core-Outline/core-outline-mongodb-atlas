const { mongo } = require('lib/index.js');

const executeQuery = async ({ value, error }, res) => {
  const { user_name, password, database, queries, ref_table } = value;
  const connection = await mongo.connDataSourceDB(
    `mongodb+srv://${user_name}:${password}@cluster0.rfams.mongodb.net`,
  );
  const db = connection.db(`${database}`);
  const collection = db.collection(`${ref_table}`);

  collection
    .find({
      $and: queries,
    })
    .toArray((err, documents) => {
      if (err) {
        console.error('Error finding documents:', err);
        return;
      }

      // Process the retrieved documents
      return documents;
    });
};
