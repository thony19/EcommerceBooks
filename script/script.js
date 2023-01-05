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


productsArray.forEach( book => {
    listBooks.push( book )

    if ( listBooks.length === 3 ){
        carrusel_inner.innerHTML +=`
        <div class="carousel-item ">
            <div class="row">
                <div class="col-md-4" id="${ listBooks[0].work_id }">
                    <div class="">
                        <div class="item-box-blog-image">
                            <!--Image-->
                            <figure> <img alt="" src="${ listBooks[0].published_works[0].cover_art_url }"> </figure>
                        </div>
                        <div class="item-box-blog-body">
                        <!--Heading-->
                            <div class="item-box-blog-heading">
                                <div>
                                    <a class="text-tittle" href="#" tabindex="0">
                                        <h5>${ listBooks[0].categories[0] }</h5>
                                    </a>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price"><i class="fa fa-user-o"></i>$ ${ listBooks[0].page_count }.00</p>
                                </div>
                            </div>
                            <div class="mt">
                                <a href="#" tabindex="0" class="white read">
                                    <img src="../assets/icon/cart.svg" alt="">
                                </a>
                            </div>
                        <!--Read More Button-->
                        </div>
                    </div>
                </div>
                <div class="col-md-4" id="${ listBooks[1].work_id }">
                    <div class="">
                        <div class="item-box-blog-image">
                            <!--Image-->
                            <figure> <img alt="" src="${ listBooks[1].published_works[0].cover_art_url }""> </figure>
                        </div>
                        <div class="item-box-blog-body">
                            <!--Heading-->
                            <div>
                                <div class="item-box-blog-heading">
                                    <a class="text-tittle" href="#" tabindex="0">
                                        <h5>${ listBooks[1].categories[0] }</h5>
                                    </a>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price"><i class="fa fa-user-o"></i>$ ${ listBooks[1].page_count }.00</p>
                                </div>
                                <!--Text-->
                            </div>
                            <div class="mt">
                                <a href="#" tabindex="0" class="  white read">
                                    <img src="../assets/icon/cart.svg" alt="">
                                </a>
                            </div>
                            <!--Read More Button-->
                        </div>
                    </div>
                </div>
                <div class="col-md-4" id="${ listBooks[2].work_id }">
                    <div class="">
                        <div class="item-box-blog-image">
                            <!--Image-->
                            <figure> <img alt="" src="${ listBooks[2].published_works[0].cover_art_url }""> </figure>
                        </div>
                        <div class="item-box-blog-body">
                            <!--Heading-->
                            <div>
                                <div class="item-box-blog-heading">
                                    <a class="text-tittle" href="#" tabindex="0">
                                        <h5>${ listBooks[2].categories[0] }</h5>
                                    </a>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price">
                                        <i class="fa fa-user-o"></i>$ ${ listBooks[2].page_count }.00
                                    </p>
                                </div>
                            </div>
                            <div class="mt">
                                <a href="#" tabindex="0" class=" white read">
                                    <img src="../assets/icon/cart.svg" alt="">
                                </a>
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
    
    // element.categories.forEach( category => {
    //     if ( CategoryArray.includes( category ) == false ){
    //         CategoryArray.push( category )
    //     }
    // } )
});