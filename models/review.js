const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  Name: { type: String, required: true },
  Location: { type: String, required: true },
  Rating: { type: String, required: false },
  Destination: { type: String, required: true },
  Review: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;