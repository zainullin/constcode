// function concat(...array) {
//   const pull = [];
//   const recurse = recurseMaster(array);
//   return pull;

//   function recurseMaster(currArray) {
//     if (currArray instanceof Array && array.length > 0) {

//       for (let i = 0; i < currArray.length; i += 1) {
//         recurseMaster(currArray[i]);
//       }
//     } else {
//       pull.push(currArray);
//       return currArray;
//     }
//   }
// }

const arr01 = [1, 2, 3];

function concat(...array) {
  const pull = []
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] instanceof Array && array[i].length > 0) {
      for (let j = 0; j < array[i].length; j += 1) {
        pull.push(array[i][j]);
      }
    } else {
      pull.push(array[i]);
    }
  }
  return pull;
}

console.log(concat(arr01, 4, [5, 6], 7, [[[8]]]));