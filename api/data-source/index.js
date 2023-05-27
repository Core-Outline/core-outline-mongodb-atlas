const express = require('express');

const router = express.Router();

const { dataSourceConfigs } = require('config/index.js');

const { create, retrieve, get } = require('./action.js');

router.post(dataSourceConfigs.data_source_endpoints.CREATE_DATA_SOURCE, async (req, res) => {
  const response = await create(req, res);
  res.json(response);
});

router.get(dataSourceConfigs.data_source_endpoints.RETRIEVE_DATA_SOURCES, async (req, res) => {
  const response = await retrieve(req, res);
  res.json(response);
});

router.get(dataSourceConfigs.data_source_endpoints.GET_DATA_SOURCE, async (req, res) => {
  const response = await get(req, res);
  res.json(response);
});

router.get('/health');

module.exports = router;
