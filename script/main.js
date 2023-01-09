// Variables iniciales
let shoppingCartArray  = [];
let listBooks          = [];
let total              = 0;
const loginSection     = document.getElementById('login-section');
const registerSection  = document.getElementById('register-section');
const containerGallery = document.getElementById('container-gallery');
const checkoutSection  = document.getElementById('checkout-section');
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
const leaveYourFeedback = document.getElementById('leaveYour');
let iconCart           = document.getElementById('icon-cart')
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
	scrollNavigation('section-home');
	checkoutSection.classList.add('active_modal');
	body.classList.add('active_overflow');
	html.classList.add('active_overflow');
}
function close_modal() {
	loginSection.classList.remove('active_modal');
	registerSection.classList.remove('active_modal');
	checkoutSection.classList.remove('active_modal');

	body.classList.remove('active_overflow');
	html.classList.remove('active_overflow');
}

// ....:::: REVIEW ::::....
function mostrarValores(){
	let contact_form = document.forms['contact-form'];
	let texto        = ' ';
	let parrafo      = ' ';
	let form_name    = contact_form['form_name'];
	let form_email   = contact_form['form_email'];
	let form_message = contact_form['form_message'];
	let testimonials = document.getElementById('testimonials');
	testimonials.innerHTML+=`
	<div class="card">
	<div class="layer"></div>
	<div class="content">
		<div class="details">
				<h2>
					${form_name.value}<br>
				</h2>
			</div>
		<p>${form_message.value}.</p>
	</div>
	</div>
	`
}
function modalReviews(){
	let leaveYour = document.getElementById('leaveYour');
	leaveYour.classList.add('displayBlock');
}
function clouseReviews(){
	let leaveYour = document.getElementById('leaveYour');
	leaveYour.classList.remove('displayBlock');
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