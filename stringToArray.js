function stringtoArray(string) {
	// body...
	var arrNested = []
	var counter = 1
	var split = string.split(',')
	for(var i=0;i<string.length;i++){
		if (string[i]===',') {
			counter++
		}
	}
	for(var i=0;i<counter;i++){
		arrNested.push([])
	}
	var row = 0;
	for(var i=0;i<split.length;i++){
		for(var j=0;j<split[i].length;j++){
			if (arrNested[i].length<split[i].length) {
				row ++
				arrNested[i].push(split[i][j])
			}
			else{
				row = 0
			}
		}
	}
	return arrNested
}
console.log(stringtoArray('aqrst,ukaei,ffooo'));
console.log(stringtoArray('aqrst,ukaffei,ff'));