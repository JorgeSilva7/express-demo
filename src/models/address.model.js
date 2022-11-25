import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
	street: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	postalCode: {
		type: Number,
	},
});

const addressModel = mongoose.model("Address", addressSchema);

export default addressModel;
