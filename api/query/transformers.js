const { queryConfigs } = require('config/index.js');

const transformQueries = ({ queries }) =>
  queries.map((query) => {
    const col = Object.keys(query)[0];
    let operation = Object.keys(query[col])[0];
    const value = query[col][operation];
    operation = queryConfigs.query_actions[operation];

    return { col: { operation: value } };
  });
module.exports = {
  transformQueries,
};
