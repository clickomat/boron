const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/reviewList/collections/hotels/",
	{
		useMongoClient: true
	}
);

// 
const hotelSeed = [
	
	{
		"name":"Sheraton Park",
		"location":"Anaheim, CA",
		"rating":"3.5",
		"cost":"$$",
		"text":"",
		"www":"http://www.sheratonparkanaheim.com/"
	},	
	{
		"name":"Beaches Resorts",
		"author":"",
		"location":"Ocho Rios, Jamaica",
		"rating":"4",
		"cost":"$$$",
		"text":"",
		
		"www":"http//www.beaches.com/main/bo/bo-home/"
	},		
	{
		"name":"Beaches Resorts",
		"author":"",
		"location":"Turks and Caicos",
		"rating":"4",
		"cost":"$$$",
		"text":"",
		
		"www":"http://www.beaches.com/main/tc/tc-home/"
	},		
	{
		"name":"Grand Palladium Bavaro Suites Resort & Spa",
		"author":"",
		"location":"Punta Cana",
		"rating":"5",
		"cost":"$$",
		"text":"",
		
		"www":"https://www.palladiumhotelgroup.com/en/"
	},		
	{
		"name":"Tradewind Resort",
		"author":"",
		"location":"St. Pete Beach, FL",
		"rating":"4",
		"cost":"$$$",
		"text":"",
		
		"www":"https://www.tradewindsresort.com/index"
	},	
	{
		"name":"Club Med Sandpiper Bay",
		"author":"",
		"location":"Port St. Lucie, FL",
		"rating":"4",
		"cost":"$$$",
		"text":"",
		
		"www":"https://www.clubmed.us/r/Sandpiper-Bay/"
	},
	{
		"name":"Dolphin Suites Curaco",
		"author":"",
		"location":"Curaco",
		"rating":"3",
		"cost":"$$$",
		"text":"",
		
		"www":""
	},
	{
		"name":"Quentin Arrive Hotel",
		"author":"",
		"location":"Amsterdam, Netherlands",
		"rating":"1",
		"cost":"$$",
		"text":"",
		
		"www":"http://quentinarrive.com/"
	},
	{
		"name":"Club Med Cancun",
		"author":"",
		"location":"Cancun, Mexico",
		"rating":"4",
		"cost":"$$$",
		"text":"",
		
		"www":"https://www.clubmed.us/r/Cancun-Yucatan/"
	},
	{
		"name":"Fiesta Americana Condesa Cancun",
		"author":"",
		"location":"Cancun, Mexico",
		"rating":"5",
		"cost":"$$$",
		"text":"",
		
		"www":"http://www.fiestamericana.com/en/"
	},
	{
		"name":"The Clinton Inn Hotel",
		"author":"",
		"location":"Tenafly, NJ",
		"rating":"3",
		"cost":"$$",
		"text":"",
		
		www:"http://www.clinton-inn.com/"
	},
	{
		"name":"Wilderness Resort",
		"author":"",
		"location":"Wisconsin Dells, WI",
		"rating":"3",
		"cost":"$$$",
		"text":"",
		
		www:"https://www.wildernessresort.com/"
	},			

];







// change values to  review then to hotels then to the other values.
db.Review
	.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
