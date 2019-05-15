class User {
	constructor (name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;

	}
	sayHi() {
		return 'Hello, '+ this.name;
	}
}

console.log(User);

class Female extends User {
	sayHi() {
		return 'Привет, ' + this.name + '! Ты зарегистрирована!';
	}
}

const Man = new User('Someone', '1232@ya.com', '12345');
console.log(Man);
console.log(Man.sayHi());

const Anya = new Female('Аня', 'anya@ya.ru', 'qwertty');
console.log(Anya);
console.log(Anya.sayHi());