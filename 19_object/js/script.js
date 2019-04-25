console.log('You are at' + window.location);

let person = {
	name : "Саша",
	surname : "Промокаша",
	age : 30,
	teacher : true,
	sayHello : function() { return 'Hello' + this.name}
}

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;
console.log(person);

person.age = 33;
console.log(person);

console.log(person['surname']);