const mongoose = require("mongoose");

const registartionSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNumber: {
		type: String,
		// required: true,
	},
	password: {
		type: String,
		requires: true,
	},
	token: {
		type: String,
		expires: "60m",
	},
	status: {
		type: String,
		default: "Active",
	},
});

const registration = mongoose.model("registration", registartionSchema);
module.exports = registration;
