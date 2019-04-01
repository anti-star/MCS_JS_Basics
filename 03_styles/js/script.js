console.log('You are at' + window.location);

const Colored = document.querySelector('.colored');

console.log(Colored);
console.log(Colored.style);

let quest = prompt('Какой выбрать цвет?');

//Colored.style.backgroundColor = "steelblue";
Colored.style['background-color']  = quest;