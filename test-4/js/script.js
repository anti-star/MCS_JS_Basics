const requestButton = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopupIcon = document.querySelector('.closePopup');
const openMenuIcon = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenuIcon = document.querySelector('.closeMenu');
const layout = document.querySelector('.layout');

requestButton.addEventListener('click', function(){
	popup.style.display = 'flex';
	layout.style.display = 'flex';
})

closePopupIcon.addEventListener('click', function(){
	popup.style.display = 'none';
	layout.style.display = 'none';
})

document.addEventListener('keydown', function(keyButton){
	if(keyButton.which == 27) {
		popup.style.display = 'none';
		layout.style.display = 'none';
	}
})

layout.addEventListener('click', function() {
	popup.style.display = 'none';
	layout.style.display = 'none';
})


openMenuIcon.addEventListener('click', function(){
	menu.style.left = 0;
	menu.style.transition = 'left .6s 0s ease-in-out';
	openMenuIcon.style.transform = 'scale(1, 0)';
	openMenuIcon.style.transition = 'transform .2s 0s ease-in-out';
	closeMenuIcon.style.transform = 'scale(1, 1)';
	closeMenuIcon.style.transition = 'transform .2s .2s ease-in-out';
})

closeMenuIcon.addEventListener('click', function(){
	menu.style.left = '-50vw';
	menu.style.transition = 'left .6s 0s ease-in-out';
	openMenuIcon.style.transform = 'scale(1, 1)';
	openMenuIcon.style.transition = 'transform .2s .2s ease-in-out';
	closeMenuIcon.style.transform = 'scale(0, 0)';
	closeMenuIcon.style.transition = 'transform .2s 0s ease-in-out';
})