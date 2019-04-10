console.log('You are at' + window.location);

function sayHi() {
	return 'Привет, студент';
}

alert(sayHi());

document.body.innerHTML = sayHi();

function sayName(name) {
	return 'Привет, ' + name
 }

 console.log(sayName('Вася'));