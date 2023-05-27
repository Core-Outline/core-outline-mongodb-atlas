const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  description: { type: String, default: '' },
  price: { type: Number, default: 0, required: true },
  currency: { type: String, default: '', required: true },
  bedrooms: { type: Number, default: 0 },
  guests: { type: Number, default: 0 },
  listing_id: { type: String, required: true },
});

module.exports = mongoose.model('package', packageSchema);
