var numbers = 100

for (var i = 1; i < numbers.size; i ++) {
  console.log("Hello world:" + i + "time");
}

// or 
for (var i = 1; i < 20; i++){
  console.log("Hello world:" + i + "time")
}
//
for (i = 0 ; i < gifts.length; i ++) {
  console.log(gifts[i])
}

//
for (let i = 0; i < 25;  i++) {
  if(i) {
     `I am ${i} strange loop.`
  }
  else if ( i === isNaN) {
    `I am ${i} strange loops.`
  }
}

// LAB 
function forLoop(array) {
	for ( i = 0; i < 25; i++) {
		if (i === 1) {
			array.push(`I am ${i} strange loop.`);
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}

	return array;
}

function whileLoop(n) {
	while (n > 0) {
		console.log(--n);
	}

	return 'done';
}



function doWhileLoop(array) {
let i = 0;

	function incrementVariable() {
		i = i + 1;
	}

	do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);

	return array;
}

// forEach(i in gifts) {
//   console.log(gifts)
// }