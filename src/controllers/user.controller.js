import User from "../models/user.model.js";

export async function getUsers(req, res) {
	const users = await User.find().populate("address jobs");
	return res.status(200).send({ users });
}

export async function getUser(req, res) {
	try {
		const user = await User.findById(req.params.userId).populate(
			"address jobs"
		);
		return res.status(200).send({ user });
	} catch (error) {
		return res.status(500).send({ error });
	}
}
