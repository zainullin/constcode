const { padStart } = require('../src/index');

const string = "Hello world!";
const result = "121Hello world!";

console.log(padStart(string, 15, "12"));

