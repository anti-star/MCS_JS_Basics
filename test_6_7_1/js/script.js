class Customer {
  constructor(name) {
    this.name = name
  }
  buy() {console.log('Куплено');}
}

console.log(Customer);


class childCustomer extends Customer {
	getPresent() {console.log('Шарик в подарок');}
}

const Someone = new Customer('Someone');
const Somebody = new childCustomer('Somebody');

console.log(Someone.buy());
console.log(Somebody.getPresent());