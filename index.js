function toArray(str) {
  str = str.split(',')
  var result = []

  for(var i = 0; i < str.length; i++) {
    result.push(str[i].split(''))
  }
  return result
}

console.log(toArray('aqrst,ukaei,ffooo'));
