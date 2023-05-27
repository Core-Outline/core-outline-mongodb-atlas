const request = require('lib/index.js');

const routeHealth = async () => {
  const res = request('/', '', {}, {}, 'get');
  return res;
};

module.exports = routeHealth
