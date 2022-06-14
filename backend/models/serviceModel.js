const mongoose = require('mongoose');

const serviceModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  //   user: {
  //     type: Schema.ObjectId,
  //     ref: 'User',
  //     required: true,
  //   },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.exports = mongoose.model('Service', serviceModel);
