const mongoose = require('mongoose');

const dogSchema = mongoose.Schema(
  {
    breed: {
      type: String,
      required: [true, 'please enter breed'],
    },
    countryOfOrigin: {
      type: String,
      required: [true, 'please enter country of origin'],
    },
    imageUrl: {
      type: String,
      required: [true, 'please enter an image url'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Dog', dogSchema);
