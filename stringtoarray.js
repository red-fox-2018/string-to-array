function stringToArray(array){
    // cara manual
    // function split(word, tipe){
    //     var arr = [];
    //     var kata = "";

    //       for(var i=0;i<word.length;i++){
    //           if(word[i]==tipe){
    //               arr.push(kata)
    //               var kata = "";
    //           }else{
    //               kata += word[i]
    //           }
    //       }
    //     arr.push(kata);
    //     return arr
    // }

    // let result = []

    // for(let i=0;i<split(array,",").length;i++){

    //     let pisahperkata = "";
    //     for(let k=0;k<split(array,",")[i].length;k++){
    //         pisahperkata += split(array,",")[i][k] + " "
    //     }

    //     result.push(split(pisahperkata.slice(0,pisahperkata.length-1)," "))
    // }
    
    // return result

    // split otomatis
    let result = []

    for(let i=0;i<array.split(",").length;i++){
        result.push(array.split(",")[i].split(""))
    }
    
    return result
}



console.log(stringToArray("aqrst,ukaei,ffooo"));
// [ [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ] ]
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
// [ [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ] ]