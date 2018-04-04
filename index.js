function strToArray(str){
    var result = []
    var nestedArr = []
    for(let i=0;i<str.length;i++){
        if (str[i] == ',') {
            result.push(nestedArr)
            nestedArr = []
        }
        else{
            nestedArr.push(str[i])
        }      
    }
    result.push(nestedArr)
    return result
}
console.log(strToArray('aqrst,ukaei,ffooo'));
console.log(strToArray('qwer,tyui,asdf,ghjk'));