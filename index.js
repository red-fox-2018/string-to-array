function stringToArray(string){
  let resultArray = []
  let arrayOfString = string.split(',')
  for (var i = 0; i < arrayOfString.length; i++) {
    let insideArrayOfString = arrayOfString[i].split('')
    resultArray.push([])
    for (var j = 0; j < insideArrayOfString.length; j++) {
      resultArray[i].push(insideArrayOfString[j])
    }
  }
  return resultArray
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
