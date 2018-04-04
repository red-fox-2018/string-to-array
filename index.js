function stringToArr(str){
  str += ','
  var result = [];
  var tmp = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      tmp.push(str[i]);
    } else if (str[i] === ',') {
        result.push(tmp);
        tmp = [];
      }
    }
  return result;
}

console.log(stringToArr('aqrst,uksei,ffooo'))
console.log(stringToArr('qwer,tyui,asdf,ghjk'))
