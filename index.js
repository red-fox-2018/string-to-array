function stringToArray(str) {
  let arrString = str.split(',');
  let output = [];
  for (let i in arrString) {
    output.push((arrString[i].split('')))
  }
  return output
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));