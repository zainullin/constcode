function printNumbers(n, arr = [], init = false) {
  if (!init) {
    const MAX = Number(n);
    for (let i = 1; i <= MAX; i += 1) {
      arr.push(i);
    }
    for (let i = MAX -1; i > 0; i -= 1) {
      arr.push(i);
    }
    init = true;
  }


  if (!(arr.length === 0)) {
    console.log(arr.pop());
    printNumbers(n, arr, init);
  }
}

printNumbers(4);