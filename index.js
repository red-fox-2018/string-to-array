function strToArr (text){
  var result = [];
  text = text+',';
  var newText = text.split('') ;
  var arrayText = [];
  for(var i = 0 ; i < newText.length ; i++){
    if(newText[i] !== ','){
      arrayText.push(newText[i]);
    }
    else{
      result.push(arrayText);
      arrayText = [];
    }
  }
  return result;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));
