window.onload = function () {
  initAppItem();
};

function initAppItem() {
  let init = 'init app';
  console.log(init);
  hoverNav();
}

function hoverNav() {
	var navigation = document.querySelector('.navigation-top');
	var navItem = navigation.querySelectorAll('.menu-parent > li');
	console.log(navItem);
}