function reverse(arr) {
  const result = [];
  while (arr.length > 0) {
    result.push(arr.pop());
  }
  return result;
}

const numbers = [1, 2, 3];

const result = reverse(numbers);

console.log({result});