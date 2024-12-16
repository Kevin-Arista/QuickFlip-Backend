const dotenv = require("dotenv");
dotenv.config();

const dbConnection = {
	url: process.env.DB_URI,
};

module.exports = dbConnection;
