function strToArr(str) {
  str = str.split(',');
  var newArr = [];
  for (var i = 0; i < str.length; i++) {
    newArr[i] = [];
    for (var j = 0; j < str[i].length; j++) {
      newArr[i][j] = str[i][j];
    }
  }
  return newArr;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,ghjk'));
