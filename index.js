function stringToArray(text){
  let arrKata = text.split(',')
  // console.log(arrKata)
  let arrResult = []
  for(let i=0; i<arrKata.length; i++){
    let arrBaris = arrKata[i].split('')
    arrResult.push(arrBaris)
  }
  console.log(arrResult)
}

let text = 'akrst,ukaei,ffooo'
stringToArray(text)
