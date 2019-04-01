console.log('You are at' + window.location);

const pageColor = document.querySelector('.page');
let questColor = prompt('Какой будет фон у страницы?');
pageColor.style['background-color'] = questColor;

let questFont = prompt('Какой будет цвет текста на странице?”');
pageColor.style['color'] = questFont;

const nameMan = document.querySelector('.name');
let questName = prompt('Как зовут человека, который вас вдохновляет?');
nameMan.innerHTML = questName;

const image = document.querySelector('img');
let questImageUrl = prompt('Введите адрес картинки');
image.setAttribute('src', questImageUrl);

const textBio = document.querySelector('.shortBio');
let questTextBio = prompt('Введите текст страницы');
textBio.innerHTML = questTextBio;

textBio.className += ' animated';