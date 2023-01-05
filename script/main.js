// Variables iniciales
let shoppingCartArray = []; //Los productos que se vayan sumando
let CategoryArray = [];
let listBooks = [];
let total = 0;
let active = true;
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const containerGallery = document.getElementById('container-gallery')
const carrusel_inner = document.getElementById('carousel-inner')
var body  = document.body;

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
}
function close_modal() {
	loginSection.classList.remove('active_modal');
	registerSection.classList.remove('active_modal');

	body.classList.remove('active_overflow');
}