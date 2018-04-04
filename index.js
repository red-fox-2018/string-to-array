/*
* PSEUDOCODE
* CREATE function string to array with PARAMETER word
*> CREATE variable splitWord with value word splited by ','
*> CREATE variable result array
*> DO LOOP until splitWord length
*>> CREATE variable temp
*>> DO LOOP inside first LOOP for looping index of value of splitWord
*>>> PUSH to temp splitWord index of first LOOP at SECOND LOOP
*>> PUSH variable temp to result
*> PRINT result
*/

function stringToArray(word) {

    let splitWord = word.split(',')
    let result = []
    
    for (var i=0; i< splitWord.length; i++) {

        let temp = []
        for (var j=0; j<splitWord[i].length; j++) {

            temp.push(splitWord[i][j])
        }

        result.push(temp)
    }

    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));

