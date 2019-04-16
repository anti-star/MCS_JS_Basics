console.log(this);

window.onscroll = function(){
	console.log(this);
}

const button = document.querySelector('button');

button.onclick = function(){
	this.innerHTML = 'Нажатый';
}

//у стрелочной функции контекст всегда глобальный, для неё this это всё окно
button.onclick = ()=> {
	console.log(this);
}