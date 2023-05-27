const mongoose = require('mongoose');

const dataSourceSchema = new mongoose.Schema({
  data_source_name: { type: String, required: true, default: '' },
  user_name: { type: String, required: true, default: '' },
  password: { type: String, required: true, default: '' },
  user_id: { type: String, required: true, default: '' },
});

module.exports = mongoose.model('data_source', dataSourceSchema);
