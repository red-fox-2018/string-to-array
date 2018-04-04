function stringToArray(str) {

  const result = []
  let value = []

  for (var i = 0; i < str.length; i++) {

    if (i != str.length-1) {

      if (str[i] == ',') {
        result.push(value)
        value = []
      }

      if (str[i] != ',') {

        value.push(str[i])

      }

    } else {

      value.push(str[i])
      result.push(value)

    }

  }

  return result

}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
