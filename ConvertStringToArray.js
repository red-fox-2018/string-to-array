var ConverterStringToArray = function(str){
    let ArrConverterBoard = [];
    let words = str.split(',')
    let CountInCell = 0;
    
    for(let i=0;i<words.length;i++){
        ArrConverterBoard.push([]);
    }

    for(let i=0;i<ArrConverterBoard.length;i++){
        for(let j=0;j<words[i].length;j++){
            ArrConverterBoard[i].push(words[i][j]);
        }
    }
    return ArrConverterBoard
}
console.log(ConverterStringToArray('aqrst,ukaei,ffooo'))
console.log(ConverterStringToArray('qwer,tyui,asdf,ghjk'))