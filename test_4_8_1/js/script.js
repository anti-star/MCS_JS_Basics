function haveEnough(yourMoney, apple, bread, applePrice, breadPrice) {
	yourMoney = parseFloat(prompt('Сколько вы взяли денег с собой?'));
	apple = parseFloat(prompt('Сколько купили яблок?'));
	bread = parseFloat(prompt('Сколько купили хлеба?'));
	applePrice = parseFloat(prompt('Сколько стоило одно яблоко?')) * apple;
	breadPrice = parseFloat(prompt('Сколько стоило один батон хлеба?')) * bread;


	if (yourMoney >= (applePrice + breadPrice)) {
		return('Вам хватает денег на покупки');
	}else {
		return('Вам не хватает денег');
	}
}

document.write(haveEnough());