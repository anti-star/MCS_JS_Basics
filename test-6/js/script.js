window.addEventListener('load', function(){

const form = document.querySelector('form');

form.onsubmit = function(e) {
	e.preventDefault();

	const username = form.elements.name.value;
	const cat = form.elements.cat.value;
	const rest = form.elements.rest.value;
	const money = form.elements.money.value;
	const city = form.elements.city.value;

	const APIkey = '26f785f482089d1eeb55af9c461a0822';
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIkey;
	let xhr = new XMLHttpRequest;
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status + '' + xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		var temp = Math.floor(DATA.main.temp - 273);
	}

	class Person {
		constructor(name) {
			this.name = name;
			this.happiness = 0;
		}
		hasCat() {return this.happiness++};
		hasRest() {return this.happiness++}
		hasMoney() {return this.happiness++}
		isSunny() {
			if (temp > 15){
				this.happiness++
			}
			return this.happiness;
		}
	}

	const NewPerson = new Person(username);
	if (cat == 'yes') {
		NewPerson.hasCat();
	}

	if (rest == 'yes') {
		NewPerson.hasRest();
	}

	if (money == 'yes') {
		NewPerson.hasMoney();
	}

	NewPerson.isSunny();

	console.log(NewPerson.happiness);

	const nameDisplay = document.querySelector('.personName');
	const iconDisplay = document.querySelector('.icon');
	nameDisplay.innerHTML = username;

	if (NewPerson.happiness == 4) {
		iconDisplay.style.backgroundImage = 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/grinning-face-with-smiling-eyes_1f601.png)';
	} else if (NewPerson.happiness <= 1) {
		iconDisplay.style.backgroundImage = 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/white-frowning-face_2639.png)';
	}else {
		iconDisplay.style.backgroundImage = 'url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/neutral-face_1f610.png)';
	}

	console.log(temp);
}

});