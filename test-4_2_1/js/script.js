console.log('You are at ' + window.location);

let questNumber = prompt('Введите число');
//questNumber = Number(questNumber);

if(questNumber < 0) {
	questNumber = -questNumber;
	console.log(questNumber);
} else if(questNumber > 0) {
	console.log(questNumber);
} else if(questNumber === '0') {
	console.log(questNumber);
}	else {
	console.log('Введено не число');
}