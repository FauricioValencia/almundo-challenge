const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const HotelSchema = new Schema({
  name: String,
  stars: Number,
  price: Number,
  image: String,
  amenities: [String]
});

module.exports = Mongoose.model('Hotels', HotelSchema);
