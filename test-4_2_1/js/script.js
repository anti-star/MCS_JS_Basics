console.log('You are at' + window.location);

let questNumber = prompt('Введите число');

if(questNumber < 0) {
	questNumber = -questNumber;
	console.log(questNumber);
}else if(questNumber >= 0) {
	console.log(questNumber);
}else {
	console.log('Введено не число');
}