const requestButton = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopupIcon = document.querySelector('.closePopup');
const openMenuIcon = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenuIcon = document.querySelector('.closeMenu');


requestButton.addEventListener('click', function(){
	popup.style.display = 'flex';
})

closePopupIcon.addEventListener('click', function(){
	popup.style.display = 'none';
})

openMenuIcon.addEventListener('click', function(){
	menu.style.left = 0;
	menu.style.transition = 'left .6s 0s ease-in-out';
})

closeMenuIcon.addEventListener('click', function(){
	menu.style.left = '-50vw';
	menu.style.transition = 'left .6s 0s ease-in-out';
})