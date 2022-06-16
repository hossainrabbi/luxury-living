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
  image: {
    type: String,
    required: [true, 'Service image is required'],
  },
});

module.exports = mongoose.model('Services', serviceSchema);
