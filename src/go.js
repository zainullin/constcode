function startsWith(str, searchString, position) {
  const regExp = new RegExp('\\b' + searchString, 'g');
  let execResult = regExp.exec(str);

  return (execResult.index === 0) ? true : false;
}
const str = 'Hello world!';
const searchStr = 'hello';

console.log(startsWith(str, searchStr));
