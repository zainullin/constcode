const { findUser } = require('../src/index');

const user1 = findUser(1);

console.log(user1);

// console.log(user1.spouse);
// console.log(user1.parents);
// console.log(user1.children);
console.log(user1.brothers);


