const express = require('express');

const router = express.Router();

const { queryConfigs } = require('../../config/index');
const { create, retrieve, get, execute } = require('./action.js');

router.post(queryConfigs?.query_endpoints?.CREATE_QUERY, async (req, res) => {
  const response = await create(req, res);
  res.json(response);
});

router.get(queryConfigs?.query_endpoints?.RETRIEVE_QUERIES, async (req, res) => {
  const response = await retrieve(req, res);
  res.json(response);
});

router.get(queryConfigs?.query_endpoints?.GET_QUERY, async (req, res) => {
  const response = await get(req, res);
  res.json(response);
});

router.post(queryConfigs?.query_endpoints?.EXECUTE_QUERY, async (req, res) => {
  const response = await execute(req, res);
  res.json(response);
});

module.exports = router;
