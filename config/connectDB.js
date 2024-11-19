// 1 - require mongoose
const mongoose = require("mongoose");

// 2 - create DB
const connectDB = async () => {
	try {
		// step 1
		await mongoose.connect(process.env.DB_URI);
		// step 2
		console.log("Database connected ..");
	} catch (error) {
		console.log("Can not connected !!!", error);
	}
};

// 3 - export
module.exports = connectDB;
