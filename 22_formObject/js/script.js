//const form = document.forms;
const form = document.forms[0];
//const form = document.forms[0].elements;
//const form = document.forms[0].elements.quantility;
const insert = document.querySelector('.total');

console.log(form);

form.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = form.elements.quantility.value * form.elements.price.value;
}