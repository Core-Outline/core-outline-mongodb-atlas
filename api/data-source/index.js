const express = require('express');

const router = express.Router();

const { dataSourceConfigs } = require('config/index.js');

const { create, retrieve, get, getDatabaseTablesColumns } = require('./action.js');
const { getDatabaseTablesandColumns } = require('../../services/index.js');

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

router.get(dataSourceConfigs.data_source_endpoints.GET_DB_COLUMNS_TABLES, async (req, res) => {
  const response = await getDatabaseTablesColumns(req, res);
  res.json(response);
});

router.get('/health');

module.exports = router;
