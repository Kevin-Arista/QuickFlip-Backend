const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const debug = require("debug")("server");

// middleware
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 8080;

// connet to db
const dbConnection = require("./config/db.js");
mongoose.set("strictQuery", true);
mongoose.connect(dbConnection.url).then(
	() => {
		debug("connected to QuickFlip DB");
	},
	(err) => {
		debug(`couldn't connect to db {${err}}`);
	}
);

// app.listen(port, [hostname], [callback fxn])
app.listen(PORT, "127.0.0.1", () => {
	debug(`listening on PORT: ${PORT}`);
});
