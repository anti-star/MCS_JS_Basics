console.log('You are at' + window.location);

const APIKey = '26f785f482089d1eeb55af9c461a0822';
const city = 'Москва';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if (xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	document.write(DATA.main.temp - 273);
}