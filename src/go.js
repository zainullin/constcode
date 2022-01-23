function forEach(arr, fn1, thisArg = null) {
  const fn = fn1.bind(thisArg);
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

const users = [
  { id: 13, name: 'Алексей' },
  { id: 15, name: 'Сергей' },
  { id: 2, name: 'Тимофей' },
];

const names1 = [];
const ids1 = [];

forEach(
  users,
  function (item) {
    names1.push(item[this.key]);
  },
  { key: 'name' },
);

forEach(
  users,
  function (item) {
    ids1.push(item[this.key]);
  },
  { key: 'id' },
);
console.log({ names1 });

// expect(names1).toEqual(["Алексей", "Сергей", "Тимофей"]);
// expect(ids1).toEqual([13, 15, 2]);

const names2 = [];
const ids2 = [];

users.forEach(
  function (item) {
    names2.push(item[this.key]);
  },
  { key: 'name' },
);

users.forEach(
  function (item) {
    ids2.push(item[this.key]);
  },
  { key: 'id' },
);

// expect(names2).toEqual(["Алексей", "Сергей", "Тимофей"]);
// expect(ids2).toEqual([13, 15, 2]);

// expect(users).toEqual([
//   { id: 13, name: "Алексей" },
//   { id: 15, name: "Сергей" },
//   { id: 2, name: "Тимофей" },
// ]);
