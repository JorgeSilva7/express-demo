import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 3,
	},
	price: {
		type: Number,
		required: true,
		min: 1,
	},
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
