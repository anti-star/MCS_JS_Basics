console.log('You are at' + window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);

if (player === computer) {
	console.log(computer);
	console.log('Nobody win');
}else if ((player===rock) && (computer===scissors) || (player===scissors) && (computer===paper) || (player===paper) && (computer===rock)) {
	console.log(computer);
	console.log('Player win');
}else if ((player===rock) && (computer===paper) || (player===scissors) && (computer===rock) || (player===paper) && (computer===scissors)) {
	console.log(computer);
	console.log('Computer win');
}else {
	console.log('Try again, type 0 - rock, 1 - scissors, 2 - paper');
}