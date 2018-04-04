function stringToArray(str){
  let arrWord = str.split(",")
  let result = []
  arrWord.forEach((word)=>{
    result.push(word.split(""))
  })
  return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
