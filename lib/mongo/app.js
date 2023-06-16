const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const { mongoConfigs } = require('config/index.js');

const connDataSourceDB = async (url) => {
  const client = new MongoClient(url);
  await client.connect();
  return client;
};

const connDB = () => {
  mongoose
    .connect(mongoConfigs.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('Database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};

const create = async (schema, details) => schema.create(details);
const del = async (schema, _id) => schema.findOneAndDelete({ _id });
const update = async (schema, details, _id) => schema.findOneAndUpdate({ _id }, details);
const fetch = async (schema, details) => schema.find(details);
const get = async (schema, details) => schema.findById(details._id);
const aggregate = async (schema, From, LocalField, foreignField, as) =>
  schema.aggregate([
    {
      $lookup: {
        From,
        LocalField,
        foreignField,
        as,
      },
    },
  ]);

module.exports = {
  connDataSourceDB,
  connDB,
  create,
  del,
  update,
  fetch,
  aggregate,
  get,
};
