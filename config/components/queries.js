const query_endpoints = {
  CREATE_QUERY: '/create-query',
  GET_QUERY: '/query',
  RETRIEVE_QUERIES: '/',
  EXECUTE_QUERY: '/execute',
};

const query_actions = {
  less_than: '$lt',
  greater_than: '$gt',
  in: '$in',
  greater_than_equal_to: '$gte',
  less_than_equal_to: '$lte',
};

module.exports = {
  query_endpoints,
  query_actions,
};
