console.log('You are at' + window.location);

let people = ['vasya', 'petya', 'sasha'];
console.log(people);
console.log(people[0]);

people[1] = 'Tanya';
console.log(people[1]);
console.log(people);

console.log(people.length);

let bigArray = [
	[1, 2, 3],
	[true, false],
	['a', 'b', 'c']
]

console.log(bigArray[0]);
console.log(bigArray[1] [0]);

let bigObject = {
	names :  ['vasya', 'petya', 'sasha'],
	grades : [
		{
			intern : 1,
			junior : 2
		},
		{
			middle : 3,
			senior : 2
		}
	]
}

console.log(bigObject.names[1]);
console.log(bigObject.grades[1].middle);