function haveEnough(yourMoney, apple, bread, applePrice, breadPrice) {
	yourMoney = parseFloat(yourMoney);
	apple = parseFloat(apple);
	bread = parseFloat(bread);
	applePrice = parseFloat(applePrice);
	breadPrice = parseFloat(breadPrice);
	
	if (yourMoney >= (applePrice * apple + breadPrice * bread)) {
		return('Вам хватает денег на покупки');
	}else {
		return('Вам не хватает денег');
	}
}

document.write(haveEnough(prompt('Сколько у вас денег?'), prompt('Сколько купили яблок?'), prompt('Сколько купили хлеба?'), prompt('Сколько стоило одно яблоко?'), prompt('Сколько стоило один батон хлеба?')));