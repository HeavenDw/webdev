//services hover
$('.col-services__btn').hover(function(){
	$(this).parents('.col-services__body').toggleClass('hover');
});
// /services hover

// works filter
$('.filter-works__link').click(function() {
	var i = $(this).data('filter');
	if(i == 1){
		$('.filter-works__col').show();
		$('.filter-works__item').removeClass('ignore');
	}else{
		$('.filter-works__col').hide();
		$('.filter-works__item').addClass('ignore');
		$('.f_' + i).show();
		$('.f_'+i+'>a').removeClass('ignore');
	}
	$('.filter-works__link').removeClass('active');
	$(this).addClass('active');
	baguetteBox.run('.gallery', {
	    ignoreClass: 'ignore'
	});
	return false;
});
// /works filter

//plan hover
$('.col-plan__btn').hover(function(){
	$(this).parents('.col-plan__body').toggleClass('hover');
});
// /plan hover

//team slider
$('.team__slider').slick({
	// стрелочки переключения слайдов вкл/выкл
	arrows:false,
	// точки переключения слайдов вкл/выкл
	dots:true, 
	// адаптация слайдера по высоте под конкретный слайд вкл/выкл
	adaptiveHeight:true,
	// количество одновременных слайдов на показ (кол-во)
	slidesToShow:3,
	// количество одновременных слайдов на скролл (кол-во)
	slidesToScroll:1,
	// скорость пролистывания слайдов (мс)
	speed:500,
	// вариант анимации пролистывания слайдов (transition-timing-function)
	easing:'linear',
	// бесконечная прокрутка слайдов (вкл/выкл)
	infinite: false,
	// номер стартового слайда
	initialSlide: 0,
	// автоматическая прокрутка слайдов (вкл/выкл)
	autoplay: false,
	// скорость автоматической прокрутки слайдов (мс)
	autoplaySpeed: 5000,
	// пауза автоматической прокрутки при фокусе (вкл/выкл)
	pauseOnFocus: true,
	// пауза автоматической прокрутки при наведении на слайдер (вкл/выкл)
	pauseOnHover: true,
	// пауза автоматической прокрутки при наведении на точки (вкл/выкл)
	pauseOnDotsHover: true,
	// возможность перелистывания слайдов перетаскиванием мыши (вкл/выкл)
	draggable: true,
	// возможность перелистывания слайдов свайпом (вкл/выкл)
	swipe: true,
	// кол-во частей слайда для перелистывания свайпом (1 - весь слайд, 5 - 1/5)
	touchThreshold: 5,
	// возможности тачскрина (вкл/выкл)
	touchMove: true,
	// ждать задержку анимации? (возможность спамить переключение слайдов) (вкл/выкл)
	waitForAnimate: true,
	// поставить активный слайдер по центру слайдера (вкл/выкл)
	centerMode: false,
	// слайдер выстраивается по длине контента (вкл/выкл)
	variableWidth: false,
	// кол-во рядов слайдов
	rows: 1,
	// кол-во слайдов в ряду
	slidesPerRow: 1,
	// вертикальный слайдер (вкл/выкл)
	vertical: false,
	// вертикальный свайп (вкл/выкл)
	verticalSwiping: false,
	// плавное слайд-шоу (вкл/выкл)
	fade: false,
	// связать слайдеры вместе (класс слайдера с которым связать)
	// asNavFor: ".sliderbig",
	// бесконечная прокрутка слайдов (вкл/выкл)
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 2,
			}
		}, 
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			}
		}
	],
	// меняет max-width на min-width (вкл/выкл)
	mobileFirst: false,
	// переместить стрелки слайдера в другой html элемени (название элемента)
	// appendArrows: $('.content'),
	// переместить точки слайдера в другой html элемени (название элемента)
	appendDots: $('.team__nav'),
});
// /team slider

baguetteBox.run('.gallery');