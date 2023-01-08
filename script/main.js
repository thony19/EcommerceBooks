// Variables iniciales
let shoppingCartArray = []; //Los productos que se vayan sumando
let CategoryArray     = [];
let listBooks         = [];
let total             = 0;

const loginSection     = document.getElementById('login-section');
const registerSection  = document.getElementById('register-section');
const containerGallery = document.getElementById('container-gallery');
const checkoutSection  = document.getElementById('checkout-section');
const carrusel_inner   = document.getElementById('carousel-inner');
const headerBooks      = document.getElementById('header-books');
const navRight         = document.getElementById('nav-books-right');
const navLeft          = document.getElementById('nav-books-left');
let cartContainer      = document.querySelector('.cart-items');
let totalElement       = document.getElementById('cart-total-title');
const subMenuGrap      = document.getElementById('subMenuGrap');
const iconUser         = document.getElementById('icon-user');
const subMenuGrapUser  = document.getElementById('subMenuGrapUser');
const btnCategory      = document.getElementById('btn-category');

var body               = document.body;
var html               = document.getElementById('html')


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

function scrollNavigation( section ){
	var scroll = document.getElementById(section);
	scroll.scrollIntoView({block:"start",behavior:"smooth"});
}
function on_modal( on_section, off_section ) {
	scrollNavigation('section-home');
	let On_section = document.getElementById( on_section );
	let Off_section = document.getElementById( off_section );

	On_section.classList.add('active_modal');
	Off_section.classList.remove('active_modal');

	body.classList.add('active_overflow');
	html.classList.add('active_overflow');
}
function modal(){
	checkoutSection.classList.add('active_modal');
}
function close_modal() {
	loginSection.classList.remove('active_modal');
	registerSection.classList.remove('active_modal');
	checkoutSection.classList.remove('active_modal');

	body.classList.remove('active_overflow');
	html.classList.remove('active_overflow');
}