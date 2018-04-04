
/*

@ Iswanul Umam - Hacktiv8
*/

function splitString(s) {
  let result = [];
  let eachStr = '';
  for (let i of s) {
    if (i == ',') {
      result.push(eachStr);
      eachStr = '';
    } else {
      eachStr += i;
    }
  }
  result.push(eachStr);
  return result;
}

function convert(strValue) {
  let tableStr = splitString(strValue);
  let result = [];
  for (let i = 0; i < tableStr.length; i++) {
    result[i] = [];
    for (let c = 0; c < tableStr[i].length; c++) {
      result[i].push(tableStr[i][c]);
    }
  }
  return result;
}

console.log(convert('abcd,efgh,ijkl,mnop'));
console.log(convert('aqrst,ukaei,ffooo'));