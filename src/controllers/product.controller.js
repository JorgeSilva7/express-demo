import Product from "../models/product.model.js";

async function getProducts(req, res) {
	const products = await Product.find();
	return res.status(200).send({ products });
}

async function getProduct(req, res) {
	const productId = req.params.id;

	const product = await Product.findById(productId);
	return res.status(200).send({ product });
}

function getProductPhotos(req, res) {
	const productId = req.params.id;
	const photoId = req.params.photoId;
	return res.status(200).send({ products_photos: productId, photoId });
}

async function createProductV1(req, res) {
	try {
		const createdProduct = await Product.create({
			name: req.body.name,
			price: req.body.price,
		});
		return res.status(201).send({ response: createdProduct });
	} catch (error) {
		return res.status(500).send({ error });
	}
}

async function createProductV2(req, res) {
	try {
		const product = new Product({
			name: req.body.name,
			price: req.body.price,
		});
		await product.save();
		return res.status(201).send({ response: product });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ error });
	}
}

async function createProductV3(req, res) {
	Product.create({
		name: req.body.name,
		price: req.body.price,
	})
		.then((mongoResponse) => {
			return res.status(201).send({ response: mongoResponse });
		})
		.catch((mongoError) => {
			return res.status(500).send({ error: mongoError });
		});
}

export {
	getProducts,
	getProduct,
	getProductPhotos,
	createProductV1,
	createProductV2,
	createProductV3,
};
