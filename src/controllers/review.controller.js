export function getReviews(req, res) {
	// TODO: Get reviews

	return res.status(201).send([]);
}

export function createReview(req, res) {
	// TODO: Create a review
	const title = req.body.title;

	if (!title) {
		return res.status(500).send({ error: "Falta el title" });
	}

	//send data to Database

	return res.status(201).send({ title_request: title });
}

export function deleteReview(req, res) {
	//search to delete
	// TODO: Delete a review
	return res.status(204).send({});
}
