const form = document.forms[0];
const result = document.querySelector('.resultText');
const div = document.querySelector('.resultBox');

form.onsubmit = function(e) {
	e.preventDefault();
	const city = form.elements.city.value;
	console.log(city);

	const APIKey = '26f785f482089d1eeb55af9c461a0822';
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey;

	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status + ' ' + xhr.statusText);
	} else {
		var DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		div.style.opacity = 1;
		result.innerHTML = 'Температура воздуха ' + Math.floor(DATA.main.temp - 273) + ' градусов' +'<br> Давление ' + Math.floor(DATA.main.pressure*0.750063755419211) + ' мм рт.ст.' + '<br> Скорость ветра ' + DATA.wind.speed + ' м/с';
	}

}