class Custumer {
	constructor (name) {
		this.name = name;
	}
	buy() {
		return 'Куплено';
	}
}

class childCustumer extends Custumer {
	getPresent() {return 'Шарик в подарок';}
}

const Someone = new Custumer('Someone');
const Somebody = new childCustumer('Somebody');

console.log(Someone);
console.log(Someone.buy());
console.log(Somebody.getPresent());