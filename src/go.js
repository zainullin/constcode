const { endsWith } = require('../src/index');

const string = "Hello world!";
const search = "world";

console.log(endsWith(string, search, 11));
// expect(endsWith(string, search)).toBe(true);
// expect(string.endsWith(search)).toBe(true);

//console.log("123456789".substring(0, 9));
