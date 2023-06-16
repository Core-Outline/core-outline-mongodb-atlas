const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  type: { type: String, default: 'findall' },
  database: { type: String, default: '', required: true },
  queries: { type: Array, default: [], required: true },
});

module.exports = mongoose.model('query', querySchema);
