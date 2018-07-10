const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/reviewListDB",
	{
		useMongoClient: true
	}
);

const reviewSeed = [
	{
		location: "40.7574,-111.8943087,17",
		author: "Clickomat",
		text:
			"Favorie place for brunch",
		date: new Date(Date.now())
	},
	{
		location: "",
		author: "",
		text:
			"",
		date: new Date(Date.now())
	},
	{
        location: "",
		author: "",
		text:
			"",
		date: new Date(Date.now())
	}
];


// change values to  review then to hotels then to the other values.
db.Review
	.remove({})
	.then(() => db.Review.collection.insertMany(reviewSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
