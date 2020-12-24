// .icon-menu - класс иконки бургера, .menu - класс меню
$('.icon-menu').click(function() {
	$(this).toggleClass('active');
	$('.header__list').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.header__link').click(function() {
	$('.icon-menu').removeClass('active');
	$('.header__list').removeClass('active');
	$('body').removeClass('lock');
});