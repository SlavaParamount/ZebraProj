var menuElement = document.querySelector('.navigation-menu');
var burgerElement = document.querySelector('.navigation-burger');


console.log('script');
burgerElement.addEventListener('click', function(){
		menuElement.classList.toggle('hidden');
})

$(".cat").hover(function(){
	$(this).prev().addClass("moveleft");
	$(this).next().addClass("moveright");
},
function(){
	$(this).prev().removeClass("moveleft");
	$(this).next().removeClass("moveright");
});