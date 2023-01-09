// API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74c1161c73mshf9a6264a3248025p11c2c6jsn74ce24a4277a',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};

let res = await fetch('https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1', options);
let data = await res.json();

const productsArray = data.results

console.log(productsArray)

// ? categories[listBooks[0].categories.length - 1]
productsArray.forEach( book => {
    listBooks.push( book )

    if ( listBooks.length === 3 ){
        carrusel_inner.innerHTML +=`
        <div class="carousel-item">
            <div class="row">
                <div class="col-md-4">
                    <div class="">
                        <div class="item-box-blog-image">
                            <!--Image-->
                            <figure> <img class="hover" alt="" src="${ listBooks[0].published_works[0].cover_art_url }"> </figure>
                        </div>
                        <div class="item-box-blog-body">
                        <!--Heading-->
                            <div class="item-box-blog-heading">
                                <div>
                                    <a class="text-tittle" href="#" tabindex="0">
                                        <h5>${ listBooks[0].title }</h5>
                                    </a>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price">$ ${ listBooks[0].page_count }.00</p>
                                </div>
                            </div>
                            <div class="mt">
                                <div tabindex="0" class="white read">
                                    <img class="shop-item-button"  id="${ listBooks[0].work_id }" src="../assets/icon/cart.svg" alt="">
                                </div>
                            </div>
                        <!--Read More Button-->
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="">
                        <div class="item-box-blog-image">
                            <!--Image-->
                            <figure> <img class="hover" alt="" src="${ listBooks[1].published_works[0].cover_art_url }""> </figure>
                        </div>
                        <div class="item-box-blog-body">
                            <!--Heading-->
                            <div>
                                <div class="item-box-blog-heading">
                                    <a class="text-tittle" href="#" tabindex="0">
                                        <h5>${ listBooks[1].title }</h5>
                                    </a>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price">$ ${ listBooks[1].page_count }.00</p>
                                </div>
                                <!--Text-->
                            </div>
                            <div class="mt">
                                <div tabindex="0" class="white read">
                                    <img class="shop-item-button" id="${ listBooks[1].work_id }" src="../assets/icon/cart.svg" alt="">
                                </div>
                            </div>
                            <!--Read More Button-->
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="">
                        <div class="item-box-blog-image">
                            <!--Image-->
                            <figure> <img class="hover" alt="" src="${ listBooks[2].published_works[0].cover_art_url }""> </figure>
                        </div>
                        <div class="item-box-blog-body">
                            <!--Heading-->
                            <div>
                                <div class="item-box-blog-heading">
                                    <a class="text-tittle" href="#" tabindex="0">
                                        <h5>${ listBooks[2].title }</h5>
                                    </a>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price">
                                        $ ${ listBooks[2].page_count }.00
                                    </p>
                                </div>
                            </div>
                            <div class="mt">
                                <div tabindex="0" class=" white read">
                                    <img id="${ listBooks[2].work_id }" class="shop-item-button" src="../assets/icon/cart.svg" alt="">
                                </div>
                            </div>
                        <!--Read More Button-->
                        </div>
                    </div>
                </div>
            </div>
            <!--.row-->
        </div>
        <!--.item-->`;

        listBooks.pop();
        listBooks.pop();
        listBooks.pop();
    }
});

let carouselItem = document.querySelectorAll('.carousel-item');
let addBtns      = document.querySelectorAll('.shop-item-button');
let shopButton   = document.querySelectorAll('.shop-item-button');

window.addEventListener( "load", ()=>{
    carouselItem[0].classList.add('active')
    addBtns = [...addBtns];
    shopButton = [...shopButton]
    shopButton.forEach( item => {
        item.addEventListener( 'mouseover', img => {
            item.src = "../assets/icon/cartWhite.svg"
        } )
        item.addEventListener( 'mouseout', img => {
            item.src = "../assets/icon/cart.svg"
        } )
    } )
} )

addBtns.forEach(  btn => {
    btn.addEventListener( 'click', e =>{
        let actualID = parseInt(e.target.id);

        // Con el ID encontrar el objeto actual
        let actualProduct = productsArray.find( item => item.work_id == actualID );

        if ( actualProduct.quantity === undefined ){
            actualProduct.quantity = 1; // ? Modifico una propiedad
        }

        let validar = false;
        // Pregutar si el producto es repetido
        shoppingCartArray.forEach( libros => {
            if ( libros.work_id == actualID ){
                validar = true;
            }
        } );

        if ( validar ){
            actualProduct.quantity ++;
        }
        else{
            shoppingCartArray.push(actualProduct);
        }

        // Dibujar en el before
        iconCart.setAttribute('data-content', shoppingCartArray.length);

        // Dibujar en el DOM el arreglo actualizado
        drowItems();

        // Actualizar el valor
        getTotal();

        // Actualizar el numero de items
        updateNumberOfItems();

        removeItems();
    } )
})

function getTotal(){
    let sumTotal;
    let supPrice = document.querySelectorAll('.cart-supPrice');
    let cont = 0
    supPrice = [...supPrice]
    console.log(supPrice)

    // ? reduce -> agrupa los mismos elementos dentro de un arreglo
    let total = shoppingCartArray.reduce( (sum, item )=>{ // * item: representa cada uno de los objetos de cart
        sumTotal = sum + item.quantity * item.page_count;
        supPrice[cont].innerHTML = `$ ${ item.quantity * item.page_count }`

        cont += 1
        return sumTotal;
    } ,0 );

    totalElement.innerHTML = `$${total}`;
    iconCart.setAttribute('data-content', shoppingCartArray.length);
};

function drowItems(){
    cartContainer.innerHTML = '';
    shoppingCartArray.forEach( item => {
        cartContainer.innerHTML += `
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${ item.published_works[0].cover_art_url }" width="100" height="100">
                <div class="cart-item-ctn"><span class="cart-item-title">${ item.title }</span></div>
            </div>
            <span class="cart-price cart-column">$ ${ item.page_count }. 00</span>
            <span class="cart-price cart-column cart-supPrice">$ ${ item.page_count*item.quantity }. 00</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" min="1" type="number" value="${ item.quantity }">
                <img class="remove-item" src="../assets/icon/close.svg" alt="">
            </div>
        </div>`;
    } );

    removeItems();
}

function updateNumberOfItems(){
    let quantityValue = document.querySelectorAll('.cart-quantity-input');
    quantityValue = [...quantityValue];

    quantityValue.forEach( value =>{
        value.addEventListener( 'click', event =>{
            console.log(value,event )
            // conseguir el titulo del libro
            let actualBooTitle = event.target.parentElement.parentElement.childNodes[1].innerText;
            let actualBookQuantity  = parseInt(event.target.value);

            // Busco el objeto atraves del titulo
            let actualBookObjet = shoppingCartArray.find( item => item.title == actualBooTitle ); // ? Buscar el libro que selecciono

            // Actualizar el numero de quantity
            actualBookObjet.quantity = actualBookQuantity;

            // Actualizar el precio
            getTotal();
        } );
    } );
};


function removeItems(){
    let removeBtn = document.querySelectorAll('.remove-item');
    removeBtn = [...removeBtn];

    removeBtn.forEach( btn => {
        btn.addEventListener( 'click', event =>{
            // conseguir el titulo del libro
            let actualBooTitle = event.target.parentElement.parentElement.childNodes[1].innerText;

            // Busco el objeto atraves del titulo
            let actualBookObjet = shoppingCartArray.find( item => item.title == actualBooTitle ); // ? Buscar el libro que selecciono

            // Remover el arreglo de producto de cart
            shoppingCartArray = shoppingCartArray.filter( item => item != actualBookObjet );

            // Dibujar en el DOM el arreglo actualizado
            drowItems();

            // Actualizar el valor
            getTotal();

            // Actualizar el numero de items
            updateNumberOfItems();

        } );
    } );
};
