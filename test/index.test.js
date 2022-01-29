const { findIndex } = require('../src/index');

describe("Тестировани метода Array.prototype.findIndex", () => {
	const getUsers = () => [
		{ id: 1, name: "Алексей", gender: "male" },
		{ id: 12, name: "Татьяна", gender: "female" },
		{ id: 33, name: "Света", gender: "female" },
	];

	it("Тест 1", () => {
		const users = getUsers();

		const user = findIndex(users, (user) => user.gender === "male");
		expect(user).toBe(0);
		expect(users).toEqual(getUsers());
	});

	it("Тест 2", () => {
		const users = getUsers();

		const user = findIndex(users, (user) => user.gender === "female");
		expect(user).toBe(1);
		expect(users).toEqual(getUsers());
	});

	it("Тест 3", () => {
		const users = getUsers();

		const user = findIndex(users, (user) => user.id >= 18);
		expect(user).toBe(2);
		expect(users).toEqual(getUsers());
	});

	it("Тест 4", () => {
		const users = getUsers();

		const thisArg = {
			name: "Света",
		};

		const user = findIndex(
			users,
			function (user) {
				return user.name === this.name;
			},
			thisArg
		);

		expect(user).toBe(2);
		expect(users).toEqual(getUsers());
		expect(thisArg).toEqual({
			name: "Света",
		});
	});
});