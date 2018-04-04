
function stringToArray(string){
  let letter = string.split(',')
  let result = []

  for(let i = 0; i < letter.length; i++){
    result.push([])
    for(let j = 0; j < letter[i].length; j++){
      result[i].push(letter[i][j])
    }
  }
  return result
}

console.log(stringToArray("qwert,yuiop,asdfg"));
