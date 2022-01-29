const { find } = require('../src/index');

describe("Тестировани метода Array.prototype.find", () => {
	const getUsers = () => [
		{ id: 1, name: "Алексей", gender: "male" },
		{ id: 12, name: "Татьяна", gender: "female" },
		{ id: 33, name: "Света", gender: "female" },
	];

	it("Тест 1", () => {
		const users = getUsers();

		const user = find(users, (user) => user.gender === "male");
		expect(user).toBe(users[0]);
		expect(users).toEqual(getUsers());
	});

	it("Тест 2", () => {
		const users = getUsers();

		const user = find(users, (user) => user.gender === "female");
		expect(user).toBe(users[1]);
		expect(users).toEqual(getUsers());
	});

	it("Тест 3", () => {
		const users = getUsers();

		const user = find(users, (user) => user.id >= 18);
		expect(user).toBe(users[2]);
		expect(users).toEqual(getUsers());
	});

	it("Тест 4", () => {
		const users = getUsers();

		const thisArg = {
			name: "Света",
		};

		const user = find(
			users,
			function (user) {
				return user.name === this.name;
			},
			thisArg
		);

		expect(user).toBe(users[2]);
		expect(users).toEqual(getUsers());
		expect(thisArg).toEqual({
			name: "Света",
		});
	});
});