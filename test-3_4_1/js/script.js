let box1 = parseFloat(prompt('Сколько вы взяли денег с собой?'));
let box2 = parseFloat(prompt('Сколько яблок вы купили сегодня?'));
let box3 = parseFloat(prompt('Сколько батонов хлеба вы купили сегодня?'));
let box4 = parseFloat(prompt('Сколько стоило одно яблоко?')) * box2;
let box5 = parseFloat(prompt('Сколько стоило один батон хлеба?')) * box3;
let box6 = (box1 >= box4 + box5);
document.body.innerHTML = box6;