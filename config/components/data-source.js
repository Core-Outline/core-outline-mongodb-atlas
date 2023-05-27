const { LISTINGS_URL } = process.env;

const data_source_endpoints = {
  CREATE_DATA_SOURCE: '/create-listing',
  RETRIEVE_DATA_SOURCES: '/delete-listing',
  GET_DATA_SOURCE: '/',
  GET_LISTING: '/get-listing',
};

module.exports = {
  data_source_endpoints,
};
