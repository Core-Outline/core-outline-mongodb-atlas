const mongoose = require('mongoose');

const dataSourceSchema = new mongoose.Schema({
  data_source_name: { type: String, required: true, default: '' },
  username: { type: String, required: false, default: '' },
  password: { type: String, required: false, default: '' },
  user_id: { type: String, required: false, default: '' },
  type: { type: String, required: true, default: '' },
  url: { type: String, required: false, default: '' },
});

module.exports = mongoose.model('data_source', dataSourceSchema);
