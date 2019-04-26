let num = 1;
let counter = 1;

while (num < 100000) {
	if (num%6 == 0) {
		let result = document.createElement('div');
		result.className = 'result ' + counter;
		result.innerHTML = num;
		container.appendChild(result);
		counter++
	}
	num++;
}