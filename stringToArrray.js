function stringToArray(str){
var stored='';
var output1=[];

	for(var i=0;i<str.length;i++){
		
		if(str[i]===','){
			output1.push([stored]);
			stored='';
		}else {
			stored+=str[i];	
		}		
	}	
output1.push([stored]);

//output2 [[],[],[]] 
	var output2=[];
		for(var j=0;j<output1.length;j++){
			output2.push([]);
		}
//masukin ke output2
	for(var k=0;k<output1.length;k++){
		for(var l=0;l<output1[k].length;l++){
			for(var m=0;m<output1[k][l].length;m++){
			output2[k].push(output1[k][l][m])
			}
		}
	}

			
return output2;		
}	

console.log(stringToArray('aqrst,ukaei,ffooo'));