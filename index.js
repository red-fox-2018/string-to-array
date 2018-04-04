
//using split

// function stringToArray(string) {
//   console.log(string.split(','))
// }

function stringToArray(string) {
  var arrHasil = [];
  huruf = ''
  for (var i = 0; i < string.length; i++) {
    huruf += string[i];
    if (string[i + 1] == ',') {
      i += 1
      arrHasil.push(huruf);
      huruf = ''
    }
  }
  arrHasil.push(huruf)
  return arrHasil
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
