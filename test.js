const jobs = [
	{
		_id: "someWorkId_1",
		name: "Trabajo 1",
	},
	{
		_id: "someWorkId_2",
		name: "Trabajo 2",
	},
];

const address = {
	street: "Calle 123",
	country: "Chile",
	city: "Temuco",
	postalcode: 4780000,
};

const user = {
	_id: "someUserId_1",
	name: "Juan",
	lastName: "Fonz",
	jobs,
	address,
};

console.log(user);
