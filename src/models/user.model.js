import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	address: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Address",
	},
	jobs: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Job",
		},
	],
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
