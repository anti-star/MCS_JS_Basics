console.log('You are at' + window.location);

var a = 'Hi';

function myFunc() {
	a = 'Hello!'
	return a;
}

console.log(a);


function myFunc2() {
	var b = 3;
	console.log(b);
}

myFunc2();

//var глоабльная переменная, она видна в том числе и из условных блоков
//let локальная переменная, не видна из условных блоков
//с функциями такая разница не работает

if(true) {
//	var c = 5;
	let c = 7;
}

console.log(c);