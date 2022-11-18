function getProducts(req, res) {
	return res.status(200).send({ products: [] });
}

function getProduct(req, res) {
	const productId = req.params.id;
	return res.status(200).send({ product: productId });
}

function getProductPhotos(req, res) {
	const productId = req.params.id;
	const photoId = req.params.photoId;
	return res.status(200).send({ products_photos: productId, photoId });
}

export { getProducts, getProduct, getProductPhotos };
