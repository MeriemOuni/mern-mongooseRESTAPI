// 1 - require express
const express = require("express");

// 2 - create instance
const app = express();

// 5 - require dotenv é configure
require("dotenv").config();

// 6 - connectDB
const connectDB = require("./config/connectDB");
connectDB();

// 7 routes
// 7.1 middleware body-parser
app.use(express.json());

// 7.2 routess
app.use("/api/contact", require("./routes/contact"));

// 3 - create PORT
const PORT = process.env.PORT;

// 4 - create server
app.listen(PORT, (err) => {
	err ? console.error(err) : console.log(`Server running on port ${PORT} ..`);
});
