console.log('You are at' + window.location);

const buttons = document.querySelectorAll('button');

/*
for (button of buttons) {
	button.style.backgroundColor = 'lightgrey';
}
*/

/*
for (key in buttons) {
	buttons[key].style.backgroundColor = 'lightblue';
}
*/

let person = {
	name: 'Sasha',
	surname: 'Promokasha',
	teacher: true
}

for(key in person) {
	console.log(person[key]);
}