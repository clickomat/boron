const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  location: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String, required: false },
  rating: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;