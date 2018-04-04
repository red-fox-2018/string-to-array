function stringToArray(str){
    var array=[]
    var strSplit=str.split(",")
    for(var i=0; i<strSplit.length; i++){
        array.push([])
        for(var j=0; j<strSplit[i].length; j++){
            array[i].push(strSplit[i][j])
        }
    }
    return array
}
console.log(stringToArray("sapi,beruang,kelinci"))