const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Service Price is required'],
  },
  description: {
    type: String,
    required: [true, 'Service Description is required'],
  },
  category: {
    type: String,
    required: [true, 'Service Category is required'],
  },
  image: {
    type: String,
    required: [true, 'Service image is required'],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Services', serviceSchema);
