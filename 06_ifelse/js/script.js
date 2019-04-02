console.log('You are at' + window.location);

const image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

if(answer < 18) {
	image.style.backgroundImage = "url(image/cat1.jpg)";
}else if (answer <= 25) {
	image.style.backgroundImage = "url(image/gusi.jpg)";
}else if (answer <= 50) {
	image.style.backgroundImage = "url(image/cat2.jpg)";
}else {
	image.style.backgroundImage = "url(image/norm.jpg)";
}