const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  database: { type: String, default: '', required: true },
  queries: { type: Array, default: [], required: true },
  data_source_id: { type: String, default: '', required: true },
  reference_table: { type: String, default: '', required: false },
  reference_column: { type: String, default: '', required: false },
});

module.exports = mongoose.model('query', querySchema);
