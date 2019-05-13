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

console.log(names);

/*
let animal = [];

for (namesItem of names) {
	for (item of namesItem) {
		animal = animal.concat(item);
	}
}

for (name of animal) {
	console.log(name);
}
*/


function ArrayCut(x) {
	let y = [];
	x.forEach(function(item) {
		y = y.concat(item);
	})
	return y;
}


while (Array.isArray(names[0]) == true) {
	names = ArrayCut(names);
}

 names.forEach(function(item) {
 	console.log(item);
 })
