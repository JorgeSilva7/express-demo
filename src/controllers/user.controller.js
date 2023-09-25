const users = [{ id: 1, name: 'Juan' }];

export async function getUsers(req, res) {
  return res.status(200).send({ users });
}

export async function getUser(req, res) {
  try {
    return res
      .status(200)
      .send({ user: users.find((user) => user.id == req.params.userId) });
  } catch (error) {
    return res.status(500).send({ error });
  }
}
