
function convert(input){
  let col=input.split(',');
  let result=[];
  //console.log(col.length);
  for (var i = 0; i < col.length; i++) {
    let pisah = col[i]
    result.push([])
    for (var j = 0; j < pisah.length; j++) {
      result[i].push(pisah[j])
    }
  }
return result
}

console.log(convert('aqrst,ukaei,ffooo'));
console.log(convert('aqlah,anaki,lonaa'));
