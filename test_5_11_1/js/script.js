let names = [
[
['куры', 'гуси', 'павлины'],
['сокол', 'орел', 'соловей']
],
[
['собака', 'кошка'],
['обезьяна', 'рысь']
]
]

let animal = [];

for (namesItem of names) {
	for (item of namesItem) {
		animal = animal.concat(item);
	}
}

for (name of animal) {
	console.log(name);
}