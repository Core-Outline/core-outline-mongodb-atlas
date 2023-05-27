const axios = require('axios');

const request = async ({
  url, service, body, params, method,
}) => axios({
  method,
  url: `${url}${service}`,
  body,
  headers: {
    Accept: 'application/json',
  },
  params,
});

module.exports = request;
