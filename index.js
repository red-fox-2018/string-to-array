/*jshint esversion:6*/

// ==========Solution 1==========
function stringToArray(string) {
  let result = [];
  let word = string.split(',');

  for (let i = 0; i < word.length; i++) {
    let row = [];
    for (let j = 0; j < word[i].length; j++) {
      row.push(word[i][j]);
    }
    result.push(row);
  }
  return result;
}



// ==========SOlution without split==========
function stringToArray(string) {
  let word = splitString(string);
  let result = [];

  for (let i = 0; i < word.length; i++) {
    let row = [];
    for (let j = 0; j < word[i].length; j++) {
      row.push(word[i][j]);
    }
    result.push(row);
  }
  return result;
}

// ======function split========
function splitString(string) {
  let tempStr = '';
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ',') {
      result.push(tempStr);
      tempStr = '';
    } else
      tempStr += string[i];
  }
  result.push(tempStr);
  return result;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log('', '');
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
