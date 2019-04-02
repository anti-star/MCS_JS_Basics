console.log('You are at' + window.location);

const image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

(answer >= 18) ? image.style.backgroundImage = 'url(image/cat1.jpg)' : image.style.backgroundImage = 'url(image/norm.jpg)';
