// Variables iniciales
let shoppingCartArray  = [];
let listBooks          = [];
let total              = 0;
let MaxPrice           = 1000;
let MinPrice           = 100;
const sectionHome      = document.getElementById('section-home');
const loginSection     = document.getElementById('login-section');
const registerSection  = document.getElementById('register-section');
const showcaseSection  = document.getElementById('showcase-section');
const checkoutSection  = document.getElementById('checkout-section');
const infoShowcase     = document.getElementById('info-showcase');
const leaveYourFeedback = document.getElementById('leaveYour');
const containerGallery = document.getElementById('container-gallery');
const carrusel_inner   = document.getElementById('carousel-inner');
const headerBooks      = document.getElementById('header-books');
const navRight         = document.getElementById('nav-books-right');
const navLeft          = document.getElementById('nav-books-left');
let cartContainer      = document.querySelector('.cart-items');
let totalElement       = document.getElementById('cart-total-price');
const subMenuGrap      = document.getElementById('subMenuGrap');
const iconUser         = document.getElementById('icon-user');
const subMenuGrapUser  = document.getElementById('subMenuGrapUser');
const btnCategory      = document.getElementById('btn-category');
let iconCart           = document.getElementById('icon-cart');
let infoImg            = document.getElementById('info-img');
let infoTittle         = document.getElementById('info-tittle');
let infoDescription    = document.getElementById('info-description');
let infoPrice          = document.getElementById('info-price');
let shopButton         = document.querySelector('.shop-button');
var body               = document.body;
var html               = document.getElementById('html')

// ....:::: HOVERS::::....
window.addEventListener('scroll', function() {
	if ( window.pageYOffset > 733 ){
		headerBooks.classList.add('change');
		navLeft.classList.add('changeL')
		navRight.classList.add('changeR')
	}
	else{
		headerBooks.classList.remove('change')
		navLeft.classList.remove('changeL')
		navRight.classList.remove('changeR')
	}
});
btnCategory.addEventListener( 'mouseover', () =>{
	subMenuGrap.classList.add('Open_option');
	headerBooks.classList.add('header-max');
} )
btnCategory.addEventListener( 'mouseout', () =>{
	subMenuGrap.classList.remove('Open_option');
	headerBooks.classList.remove('header-max');
} )
iconUser.addEventListener( 'mouseover', () =>{
	subMenuGrapUser.classList.add('Open_option');
	headerBooks.classList.add('header-max');
} )
iconUser.addEventListener( 'mouseout', () =>{
	subMenuGrapUser.classList.remove('Open_option');
	headerBooks.classList.remove('header-max');
} )

// ....:::: SCROLL ::::....
function scrollNavigation( section ){
	var scroll = document.getElementById(section);
	scroll.scrollIntoView({block:"start",behavior:"smooth"});
}

// ....:::: MODALS ::::....
function on_modal( section ) {
	scrollNavigation('section-home');
	let Section = document.getElementById( section );
	close_modal();
	Section.classList.add('active_modal');
	body.classList.add('active_overflow');
	html.classList.add('active_overflow');
	// sectionHome.classList.add('cursor');
	// sectionHome.addEventListener('click', close_modal() );
}
function close_modal() {
	loginSection.classList.remove('active_modal');
	registerSection.classList.remove('active_modal');
	showcaseSection.classList.remove('active_modal');
	checkoutSection.classList.remove('active_modal');
	infoShowcase.classList.remove('active_modal');
	sectionHome.classList.remove('active_modal');

	body.classList.remove('active_overflow');
	html.classList.remove('active_overflow');
}
function close_pop() {
	showcaseSection.classList.remove('color');
	infoShowcase.classList.remove('active_modal');
}
// ....:::: REVIEW ::::....
function modalReviews(){
	leaveYourFeedback.classList.add('displayBlock');
}
function clouseReviews(){
	leaveYourFeedback.classList.remove('displayBlock');
}
function show_confirmation(){
    var modal                     = document.getElementById('leaveYour');
	var show_message_confirmation = document.getElementById('leaveYour');
	var button_close_confirmation = document.getElementById('containerButtonC');
	let buttonC                   = document.getElementById('buttonC');

	modal.style.backgroundColor   = "#E7C6B9";
	buttonC.style.marginRight  = "25vw";
	buttonC.style.marginBottom = "5vw";
    show_message_confirmation.innerHTML =  `${button_close_confirmation.innerHTML}`+
											'<div class="container-confir"><h3 class="confirmation">THANK YOU FOR <br/>YOUR FEEDBACK!</h3></div>'
											;

}

// ....:::: VITRINA ::::....
// Rubberband Input
const rubberIpts = document.querySelectorAll(".rubber-ipt");

for (var i = 0; i < rubberIpts.length; i++) {
	const rubberRange = rubberIpts[i].querySelector(".rubber-ipt-range");
	const rubberMin = rubberIpts[i].querySelector(".rubber-ipt-min");
	const rubberMax = rubberIpts[i].querySelector(".rubber-ipt-max");
	var initialMousePosMin;
	var initialMousePosMax;

	// Rubber Minimum
	rubberMin.style.left = '0px'
	function dragTargetMin(dragOffsetMin) {
		rubberMin.style.left = `${dragOffsetMin}px`;
	}
	function getDragOffsetMin(e) {
		if (initialMousePosMin == null) {
			initialMousePosMin = e.clientX;
		}
		var mousePos = e.clientX;
		var dragOffsetMin = mousePos - initialMousePosMin;
		var rubberMinMax = 200 + (parseInt(rubberMax.style.left, 10)) - 10;

		if (dragOffsetMin < 0){dragOffsetMin = 0}
		else if (dragOffsetMin > rubberMinMax) {
			dragOffsetMin = rubberMinMax;
		};
		if (dragOffsetMin > 190) {
			dragOffsetMin = 190;
		}

		dragTargetMin(dragOffsetMin);
		updateRubberRangeMin(dragOffsetMin);
		getMinPrice(dragOffsetMin);
	}
	function SetDragStartMin(e) {
		document.addEventListener("mousemove", getDragOffsetMin);
	}
	function stopDragMin() {
		document.removeEventListener("mousemove", getDragOffsetMin);
	}
	rubberMin.addEventListener("mousedown", SetDragStartMin);
	document.addEventListener("mouseup", stopDragMin);

	// Rubber Maximum
	rubberMax.style.left = '0px'
	function dragTargetMax( dragOffsetMax ) {
		rubberMax.style.left = `${dragOffsetMax}px`;
	}
	function getDragOffsetMax(e) {
		if (initialMousePosMax == null) {
			initialMousePosMax = e.clientX;
		}
		var mousePos = e.clientX;
		var dragOffsetMax = mousePos - initialMousePosMax;
		var rubberMaxMin = (parseInt(rubberMin.style.left, 10) - 200 + 10);

		if (dragOffsetMax > 0){dragOffsetMax = 0}
		else if (dragOffsetMax < rubberMaxMin) {
			dragOffsetMax = rubberMaxMin;
		};
		if (dragOffsetMax < -190) {
			dragOffsetMax = -190;
		};
		dragTargetMax(dragOffsetMax);
		updateRubberRangeMax(dragOffsetMax);
		getMaxPrice(dragOffsetMax);
	}
	function SetDragStartMax() {
		document.addEventListener("mousemove", getDragOffsetMax);
	}
	function stopDragMax() {
		document.removeEventListener("mousemove", getDragOffsetMax);
	}

	rubberMax.addEventListener("mousedown", SetDragStartMax);
	document.addEventListener("mouseup", stopDragMax);


	// Update Range between Min and Max
	rubberRange.style.width = '200px';
	function updateRubberRangeMin(dragOffsetMin){
		rubberRange.style.left = `${dragOffsetMin}px`;

		var rubberRangeWidth = 200 - ((parseInt(rubberMax.style.left, 10)) * -1) - dragOffsetMin;
		if (rubberRangeWidth <= 0) {
			rubberRangeWidth = 0;
		}
		rubberRange.style.width = `${rubberRangeWidth}px`;
	}
	function updateRubberRangeMax(dragOffsetMax){
		var rubberRangeWidth = 200 - parseInt(rubberMin.style.left, 10) - (dragOffsetMax * -1);
		if (rubberRangeWidth <= 0) {
			rubberRangeWidth = 0;
		}
		rubberRange.style.width = `${rubberRangeWidth}px`;
	}

	// Update price range
	const minPrice = rubberIpts[i].querySelector(".rubber-value-min");
	const maxPrice = rubberIpts[i].querySelector(".rubber-value-max");

	var RubberMinPrice = 100;
	var RubberMaxPrice = 1000;

	function getMinPrice(dragOffsetMin) {
		rubberMinPrice = ((RubberMaxPrice/200) * dragOffsetMin) + (((RubberMinPrice - ((RubberMinPrice/200) * dragOffsetMin))));
		minPrice.innerHTML = `${Math.ceil(rubberMinPrice)}`;
		MinPrice = Math.ceil(rubberMinPrice);

	}
	function getMaxPrice(dragOffsetMax) {
		rubberMaxPrice = ((RubberMaxPrice/200) * (dragOffsetMax + 200)) + ((RubberMinPrice - ((RubberMinPrice/200) * (dragOffsetMax + 200))));
		maxPrice.innerHTML = `${Math.ceil(rubberMaxPrice)}`;
		MaxPrice = Math.ceil(rubberMaxPrice);
	}
};