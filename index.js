function strToArr(str) {
    let split = str.split(',');
    let result = [];

    split.forEach(value => {
        result.push(value.split(''));
    });

    return result;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log()
console.log(strToArr('qwer,tyui,asdf,ghjk'));