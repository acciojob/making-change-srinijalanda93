const makeChange = (c) => {
//take the currencyvalue =c
	let units={q:25,d:10,n:5,p:1}
let output={};
	for(let i in units){
	  	let currentunit=units[i]; //1
		//output[i]=c%currentunit;
		output[i]= Math.floor(c / currentunit);
		c=c-currentunit*output[i];
	}
	return output; 
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
