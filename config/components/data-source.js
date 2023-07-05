const { LISTINGS_URL } = process.env;

const data_source_endpoints = {
  CREATE_DATA_SOURCE: '/create-data-source',
  GET_DATA_SOURCE: '/get-data-source',
  RETRIEVE_DATA_SOURCES: '/',
  GET_DB_COLUMNS_TABLES: '/get-db-columns-tables'
};

module.exports = {
  data_source_endpoints,
};
