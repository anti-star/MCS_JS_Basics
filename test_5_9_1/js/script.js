let num = 1;

while (num < 100000) {
	if (num%6 == 0) {
		let result = document.createElement('div');
		result.className = 'result ' + num;
		result.innerHTML = num;
		container.appendChild(result);
	}
	num++;
}