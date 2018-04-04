
//using split

// function stringToArray(string) {
//   console.log(string.split(','))
// }

function stringToArray(string) {
  var arrHasil = [];
  var split = string.split('')
  // huruf = ''
  var arr = []
  for (var i = 0; i < split.length; i++) {
    // huruf += split[i];
    arr.push(split[i]);
    if (split[i + 1] == ',') {
      i += 1
      arrHasil.push(arr);
      arr = []
    }
  }
  arrHasil.push(arr)
  return arrHasil
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
