// Напишите полифил метода String.prototype.padEnd. В теле полифила не используйте никаких методов класса String или других классов. Используйте только условные операторы и циклы.
// В полифиле первый аргумент - это строка. Все остальные аргументы такие же как и в том же порядке, что и у одноименного метода. Т.е.:
// string.padEnd(targetLength, padString)  <=> padEnd(string, targetLength, padString)

function padEnd(str, repeatCount, padString) {
  if (repeatCount === undefined && padString === undefined) {
    return str;
  }
  if (padString === undefined) {
    if (str.length >= repeatCount) {
      return str;
    } else {
      let result = '';
      for (let i = 0; i < str.length; i++) {
        result = result + str[i];
      }
      for (let i = 0; i < repeatCount - str.length; i++){
        result = result + ' ';
      }
      return result;
    }
  }

  // str, repeatCount, padString
  let addStr = '';
  if (str.length >= repeatCount) {
    return str;
  } else {    
    while(addStr.length < repeatCount - str.length){
      addStr = addStr + padString;
    }
    // addStr = addStr + padString;
    let cutDelta = addStr.length % (repeatCount - str.length);
    addStr = addStr.substring(0, addStr.length - cutDelta);
  }
  return str + addStr;
}

module.exports = {
  padEnd,
};
