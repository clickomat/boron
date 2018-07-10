import axios from "axios";

export default {
	// Gets all review
	getReviews: function() {
		return axios.get("/api/reviews");
	},
	// Gets the review with the given id
	getReview: function(id) {
		return axios.get("/api/review/" + id);
	},
	// Deletes the review with the given id
	deleteReview: function(id) {
		return axios.delete("/api/reviews/" + id);
	},
	// Saves a review to the database
	saveReview: function(reviewData) {
		console.log('api.saveReview:', reviewData);
		return axios.post("/api/reviews", reviewData);
	},


	// Gets all hotel
	getHotels: function() {
		return axios.get("/api/hotels");
	},
	// Gets the hotel with the given id
	getHotel: function(id) {
		return axios.get("/api/hotel/" + id);
	},
	// Deletes the hotel with the given id
	deleteHotel: function(id) {
		return axios.delete("/api/hotels/" + id);
	},
	// Saves a hotel to the database
	saveHotel: function(hotelData) {
		console.log(hotelData);
		return axios.post("/api/hotels", hotelData);
	},

	// Gets all blog
	getBlogs: function() {
		return axios.get("/api/blogs");
	},
	// Gets the blog with the given id
	getBlog: function(id) {
		return axios.get("/api/blog/" + id);
	},
	// Deletes the blog with the given id
	deleteBlog: function(id) {
		return axios.delete("/api/blogs/" + id);
	},
	// Saves a blog to the database
	saveBlog: function(blogData) {
		console.log(blogData);
		return axios.post("/api/blogs", blogData);
	}

};
