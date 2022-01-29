const getUsers = () => [
  { id: 1, name: 'Алексей', gender: 'male' },
  { id: 12, name: 'Татьяна', gender: 'female' },
  { id: 33, name: 'Света', gender: 'female' },
];

function find(array, callback, thisArg) {
  const fn = callback.bind(thisArg);
  for (let i = 0; i < array.length; i += 1) {
    if (fn(array[i], i, thisArg)) return array[i];
  }
  return -1;
}

const users = getUsers();

const thisArg = {
  name: 'Света',
};

const user = find(
  users,
  function (user) {
    return user.name === this.name;
  },
  thisArg,
);

console.log(user);// .toBe(users[2]););
// expect(users).toEqual(getUsers());

