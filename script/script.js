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

// ? categories[listBooks[0].categories.length - 1]

let books = [
    {
        published_works: [
            {
                cover_art_url: 'https://www.mrbooks.com/mrbooks/portadas/9789585581432.jpg'
            }
        ],
        title: 'El Amor En Los Tiempos Del Cólera',
        page_count: '200',
        work_id: 100,
        categories: ['Ficción', 'Realismo mágico'],
        summary:
        '«Era inevitable: el olor de las almendras amargas le recordaba siempre el destino de los amores contrariados.» Así empieza una de las historias de amor más maravillosas de la literatura universal. Un amor no correspondido durante medio siglo con un pueblecito portuario del Caribe como escenario. El Nobel de Literatura nos presenta la mágica relación entre Fermina Daza y Florentino Ariza como una mezcla tropical de plantas y arcilla, que el maestro moldea y con las que fantasea a su placer entre los territorios del mito y la leyenda. Los jugos, olores y sabores del trópico alimentan una prosa alucinatoria que se ha ganado el favor de miles de lectores en todo el mundo.',
    },
    {
        published_works: [
            {
                cover_art_url: "https://horadelrecreo.com/wp-content/uploads/2020/02/Resumen-de-como-agua-para-chocolate-2-655x1024.jpg"
            }
        ],
        title: 'Como Agua Para Chocolate',
        page_count: '150',
        work_id: 101,
        categories: ['Romance', 'Ficción', 'Realismo mágico', 'Tragedia'],
        summary:
        'La clásica historia de amor se sitúa en el rancho De la Garza, mientras la dueña tiránica Mamá Elena corta cebolla en la mesa de cocina durante sus últimos días de embarazo. Aún dentro del útero de su madre, la futura hija llora tan violentamente que causa un parto prematuro y la pequeña Tita nace entre las especies para preparar sopa de fideos.'+
        'Este temprano encuentro con la comida pronto se convierte en una forma de vida. Tita se convierte en una chef maestra y, a lo largo de la historia, comparte puntos especiales de sus recetas favoritas con los lectores.'
    },
    {
        published_works: [
            {
                cover_art_url: "https://agora.xtec.cat/iescabanyes/wp-content/uploads/usu559/2019/02/orgullo-y-prejuicio-642x1024.jpg"
            }
        ],
        title: 'Orgullo y Prejuicio',
        page_count: '270',
        work_id: 102,
        categories: ['Romance', 'Ficción'],
        summary:
        'Para los amantes de los clásicos atemporales, esta serie de ediciones de literatura mundial bellamente empaquetadas y a precios asequibles abarca una variedad de géneros literarios, que incluyen teatro, novelas, poemas y ensayos.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://st.booknet.com/uploads/covers/220/1571251556_23.jpg'
            }
        ],
        title: 'Autores Del Terror',
        page_count: '110',
        work_id: 103,
        categories: ['Terror', 'Suspenso'],
        summary:
        'Historias cortas inspiradas en personas con problemas y desorden mental, personas que solo buscan ganar un poco de nuestra atención...',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://st.booknet.com/uploads/covers/220/1663677967_85.jpg'
            }
        ],
        title: 'La Criatura Del Armario',
        page_count: '145',
        work_id: 104,
        categories: ['Terror', 'Sobrenatural'],
        summary:
        'Joe y su nieto Tomy viven en un tranquilo lugar asolados por las muertes de sus seres más cercanos. Ambos están pasando momentos tranquilos, sin embargo, algo los observa desde el armario del pequeño, y su sed de sangre hará que sus vidas, en un abrir y cerrar de ojos, tomen un giro macabro. La única salida es dejar atrás lo más preciado, y la salvación parte desde una pequeña luz de esperanza.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://st.booknet.com/uploads/covers/220/1603173154_23.png'
            }
        ],
        title: 'La Cabaña',
        page_count: '100',
        work_id: 105,
        categories: ['Terror', 'Fantasma'],
        summary:
        'No vayas por allí. Relato corto para participar del concurso Horror en Halloween.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://imagessl5.casadellibro.com/a/l/t7/05/9788418966705.jpg'
            }
        ],
        title: 'La Saga De Las Curanderas',
        page_count: '200',
        work_id: 106,
        categories: ['Narrativa histórica'],
        summary:
        'A través de la vida de Rosalía Carcedo (1911--1972) se hace un viaje durante una parte del siglo XX, desde Galicia, de donde era natural, pasando por el Madrid de la República y de la Guerra Civil, hasta la aldea de origen en la que volvió a vivir durante la Dictadura y en la que continuó ejerciendo su profesión, curandera, a pesar de la incomprensión que la rodeaba y la incredulidad de personas con ignorancia invencible, que no entendían o no querían saber.'+
        'Esta biografía ficticia de una curandera gallega permite conocer la relación de aquellas personas con la población y con las autoridades civiles y religiosas. Además, ayuda a aproximarse al uso de las hierbas y de las setas, tanto con fines curativos como mágicos, en ese mundo críptico e infravalorado de las meigas gallegas.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://imagessl4.casadellibro.com/a/l/t7/84/9788412585384.jpg'
            }
        ],
        title: 'La Diosa Contra Roma',
        page_count: '445',
        work_id: 107,
        categories: ['Narrativa histórica'],
        summary:
        'Año 14 d. C., Ovativo Augusto ha muerto y, tras las honras fúnebres, ha sido proclamado dios. Cleóstrato, un esclavo griego ya anciano, es libre para escribir la historia silenciada en vida del difunto: la epopeya de Imborg, la guerrera astur.'+
        'Testigo mudo de los hechos, atesora en su memoria todos los detalles. Combinando la realidad histórica y la ficción, este libro de ágil lectura nos dará a conocer la verdadera dimensión de una guerra que puso en jaque a Roma y se convirtió en la pesadilla del emperador.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://imagessl1.casadellibro.com/a/l/t7/61/9788408267461.jpg'
            }
        ],
        title: 'El Manuscrito De Niebla',
        page_count: '375',
        work_id: 108,
        categories: ['Narrativa histórica'],
        summary:
        'Salamanca, siglo XVI. Un asesinato, el robo de unos manuscritos de Nebrija y una guerra inquisitorial abierta.'+
        '25 de noviembre de 1506. Un tipógrafo aparece muerto de forma violenta en una imprenta de Salamanca.' +
        'El taller está revuelto y han desaparecido varios originales del célebre humanista Antonio de Nebrija. Este le encarga a su antiguo alumno, el pesquisidor Fernando de Rojas, que averigüe quién mató al cajista y recupere los manuscritos robados. La tarea no va a ser fácil, pues Nebrija cuenta con muchos detractores dentro del Estudio salmantino por sus numerosos enfrentamientos con otros catedráticos. Para colmo, el humanista será objeto de un proceso inquisitorial por haber osado enmendar la traducción latina de la Biblia. Esto hará que Rojas tenga que defenderlo ante el Santo Tribunal y plantar cara a los enemigos de la imprenta y de las nuevas ideas.'+
        'Ambientada en el fascinante mundo de las imprentas y librerías de comienzos del siglo XVI, con ella su autor ha querido rendir un apasionado homenaje al maestro Nebrija, haciendo de él un personaje inolvidable que seducirá a todo tipo de lectores.'+
        'El manuscrito de niebla es la sexta entrega de la exitosa serie protagonizada por el autor de La Celestina.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://st.booknet.com/uploads/covers/220/1671483163_89.png'
            }
        ],
        title: 'Gemidos Nocturnos',
        page_count: '205',
        work_id: 109,
        categories: ['Romance'],
        summary:
        'Para gran parte del mundo las apariencias son muy importantes, pero para la familia Dumont las apariencias es absolutamente todo.'+
        'Una familia que es capaz de hacer cualquier cosa para mantener la imagen de perfección ante todo el mundo. Al grado de llegar al punto de deshacerse de alguien de su propia sangre.',
    },
    {
        published_works: [
            {
                cover_art_url: 'https://st.booknet.com/uploads/covers/220/1662650737_68.png'
            }
        ],
        title: 'Dulce Equivocación',
        page_count: '235',
        work_id: 110,
        categories: ['Romance'],
        summary:
        'Max es millonario, pero estéril, por eso su novia le terminó,'+
        'Salma es madre soltera de mellizas, y está llena de deudas. Esta pareja se topará en una discoteca y tendrá una noche de pasión, que tendrá como resultado un embarazo.'+
        'Max no puede creerlo, pues piensa que es estéril, algo que desmienten los nuevos exámenes. Todo se complicará cuando su exnovia regrese y decida reanudar su relación, dándole una nueva oportunidad, sin saber que él embarazó a una desconocida.',
    },
];

books.forEach( book => {
    productsArray.push(book);
} )

console.log(productsArray)

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
                            <figure> <img class="vitrine-img hover" alt="" src="${ listBooks[0].published_works[0].cover_art_url }"> </figure>
                        </div>
                        <div class="item-box-blog-body">
                        <!--Heading-->
                            <div class="item-box-blog-heading">
                                <div>
                                    <div class="text-tittle">
                                        <p>${ listBooks[0].title }</p>
                                    </div>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price">$ ${ listBooks[0].page_count }.00</p>
                                </div>
                            </div>
                            <div class="mt">
                                <div tabindex="0" class="white read">
                                    <div id="${ listBooks[0].work_id }" class="shop-item-button">
                                        <svg class="display_block" width="40" height="43" viewBox="0 0 40 43" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3677 23.9957C9.88633 21.8343 9.42942 19.7248 8.9562 17.6152C7.92 12.9293 6.86748 8.2434 5.83944 3.54883C5.74969 3.13384 5.61915 2.96093 5.17856 2.97822C3.98734 3.02145 2.78796 2.99551 1.58858 2.99551C0.748198 2.98687 0.152588 2.40761 0.152588 1.59493C0.152588 0.782238 0.740039 0.202982 1.58042 0.194336C3.26118 0.194336 4.93379 0.194336 6.61455 0.194336C7.43045 0.194336 7.88736 0.583389 8.07502 1.4393C8.36874 2.75344 8.67879 4.06757 8.94804 5.39035C9.01331 5.71888 9.13569 5.79669 9.43758 5.79669C14.2351 5.78805 19.0326 5.78805 23.8383 5.78805C27.8281 5.78805 31.8178 5.7794 35.7994 5.78805C38.1574 5.79669 40.0177 7.93216 39.7321 10.3702C39.6179 11.4077 39.3242 12.4192 39.1039 13.4394C38.3695 16.7507 37.6352 20.0706 36.8928 23.3819C36.4114 25.5346 34.9183 26.7709 32.8132 26.7709C25.5517 26.7709 18.2901 26.7709 11.0286 26.7709C10.8491 26.7709 10.6696 26.7623 10.4901 26.7882C9.82105 26.9093 9.34783 27.5491 9.39678 28.258C9.43758 28.941 9.96792 29.5116 10.6288 29.5635C10.7757 29.5721 10.9307 29.5721 11.0857 29.5721C18.3636 29.5721 25.6333 29.5721 32.9111 29.5808C33.213 29.5808 33.5476 29.6413 33.825 29.7796C34.3308 30.039 34.5756 30.6961 34.4614 31.2667C34.339 31.8546 33.8739 32.3041 33.3109 32.3647C33.2049 32.3819 33.0906 32.3733 32.9846 32.3733C25.6006 32.3733 18.2167 32.3733 10.8328 32.3733C8.79301 32.3733 7.19384 30.99 6.83484 28.9496C6.42689 26.6499 7.8792 24.4539 10.0577 24.0649C10.1393 24.0476 10.229 24.0303 10.3677 23.9957ZM9.68235 8.58922C9.70683 8.72755 9.71499 8.8313 9.7313 8.9264C10.8246 13.8371 11.9261 18.7478 13.0031 23.6672C13.0684 23.9698 13.2071 23.9784 13.4355 23.9784C19.9138 23.9784 26.3839 23.9784 32.8622 23.9784C33.6781 23.9784 34.1268 23.5894 34.3145 22.7334C35.2202 18.6873 36.1177 14.6325 37.0233 10.5864C37.3007 9.3241 36.7377 8.58058 35.5057 8.58058C27.053 8.58058 18.592 8.58058 10.1393 8.58058C9.99239 8.58923 9.84553 8.58922 9.68235 8.58922Z" fill="#BA7D68"/>
                                            <path d="M14.6838 33.7827C16.8622 33.7827 18.6409 35.6675 18.6328 37.9845C18.6328 40.3015 16.8541 42.169 14.6675 42.1776C12.5053 42.1776 10.7185 40.3015 10.7103 38.0191C10.7103 35.6675 12.4808 33.7827 14.6838 33.7827ZM14.6593 36.5753C13.9413 36.5839 13.3539 37.215 13.3539 37.9758C13.3539 38.7539 13.9739 39.3851 14.7083 39.3678C15.4263 39.3505 16.0055 38.7107 15.9892 37.9413C15.9811 37.1891 15.3773 36.5666 14.6593 36.5753Z" fill="#BA7D68"/>
                                            <path d="M33.1558 38.0014C33.1477 40.3098 31.3608 42.1772 29.166 42.1686C26.9957 42.16 25.2171 40.2493 25.2334 37.9409C25.2497 35.6239 27.0365 33.7651 29.2232 33.7737C31.4016 33.7824 33.164 35.6844 33.1558 38.0014ZM30.5123 37.9841C30.5204 37.2233 29.9248 36.5835 29.215 36.5749C28.497 36.5662 27.8932 37.1801 27.8769 37.9409C27.8606 38.719 28.4644 39.3674 29.1987 39.3674C29.9167 39.3674 30.5123 38.7449 30.5123 37.9841Z" fill="#BA7D68"/>
                                        </svg>
                                        <svg class="display_none" width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_949_3)">
                                            <path d="M10.3875 23.8014C9.89798 21.64 9.43337 19.5304 8.95216 17.4209C7.89847 12.735 6.8282 8.04906 5.78281 3.3545C5.69155 2.93951 5.5588 2.7666 5.11078 2.78389C3.89946 2.82711 2.67984 2.80118 1.46022 2.80118C0.60566 2.79253 0 2.21328 0 1.40059C0 0.587902 0.597364 0.00864561 1.45193 0C3.16105 0 4.86188 0 6.571 0C7.40067 0 7.86529 0.389053 8.05611 1.24497C8.35479 2.5591 8.67007 3.87323 8.94386 5.19601C9.01023 5.52455 9.13469 5.60236 9.44166 5.60236C14.3201 5.59371 19.1986 5.59371 24.0854 5.59371C28.1425 5.59371 32.1996 5.58506 36.2484 5.59371C38.6461 5.60236 40.5378 7.73782 40.2474 10.1759C40.1312 11.2134 39.8325 12.2249 39.6085 13.2451C38.8618 16.5563 38.1151 19.8763 37.3601 23.1875C36.8706 25.3403 35.3523 26.5766 33.2118 26.5766C25.8277 26.5766 18.4436 26.5766 11.0595 26.5766C10.877 26.5766 10.6945 26.568 10.5119 26.5939C9.83161 26.7149 9.3504 27.3547 9.40018 28.0637C9.44166 28.7467 9.98095 29.3173 10.653 29.3691C10.8023 29.3778 10.96 29.3778 11.1176 29.3778C18.5183 29.3778 25.9106 29.3778 33.3113 29.3864C33.6183 29.3864 33.9585 29.447 34.2406 29.5853C34.7549 29.8446 35.0039 30.5017 34.8877 31.0723C34.7632 31.6602 34.2903 32.1098 33.7179 32.1703C33.61 32.1876 33.4938 32.179 33.386 32.179C25.8775 32.179 18.3689 32.179 10.8604 32.179C8.78622 32.179 7.16007 30.7957 6.79501 28.7553C6.38018 26.4556 7.85699 24.2596 10.0722 23.8705C10.1552 23.8532 10.2464 23.8359 10.3875 23.8014ZM9.69057 8.39489C9.71546 8.53322 9.72375 8.63697 9.74035 8.73207C10.8521 13.6428 11.9722 18.5535 13.0673 23.4728C13.1337 23.7754 13.2747 23.7841 13.5071 23.7841C20.0947 23.7841 26.6739 23.7841 33.2615 23.7841C34.0912 23.7841 34.5475 23.395 34.7384 22.5391C35.6593 18.493 36.5719 14.4382 37.4929 10.392C37.775 9.12977 37.2025 8.38624 35.9497 8.38624C27.3543 8.38624 18.7506 8.38624 10.1552 8.38624C10.0058 8.39489 9.8565 8.39489 9.69057 8.39489Z" fill="white"/>
                                            <path d="M14.7763 33.5881C16.9916 33.5881 18.8003 35.4729 18.792 37.7899C18.792 40.1069 16.9833 41.9744 14.7598 41.983C12.5611 41.983 10.7441 40.1069 10.7358 37.8245C10.7358 35.4729 12.5362 33.5881 14.7763 33.5881ZM14.7515 36.3807C14.0213 36.3893 13.424 37.0204 13.424 37.7813C13.424 38.5594 14.0545 39.1905 14.8012 39.1732C15.5313 39.1559 16.1204 38.5161 16.1038 37.7467C16.0955 36.9945 15.4816 36.372 14.7515 36.3807Z" fill="white"/>
                                            <path d="M33.5601 37.8073C33.5518 40.1157 31.7349 41.9832 29.503 41.9745C27.2961 41.9659 25.4874 40.0552 25.504 37.7468C25.5206 35.4298 27.3376 33.571 29.5611 33.5796C31.7763 33.5883 33.5684 35.4903 33.5601 37.8073ZM30.872 37.79C30.8803 37.0292 30.2746 36.3894 29.5528 36.3808C28.8227 36.3722 28.2087 36.986 28.1922 37.7468C28.1756 38.5249 28.7895 39.1733 29.5362 39.1733C30.2663 39.1733 30.872 38.5508 30.872 37.79Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_949_3">
                                            <rect width="40.2723" height="41.9744" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
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
                            <figure> <img class="vitrine-img hover" alt="" src="${ listBooks[1].published_works[0].cover_art_url }""> </figure>
                        </div>
                        <div class="item-box-blog-body">
                            <!--Heading-->
                            <div>
                                <div class="item-box-blog-heading">
                                    <div class="text-tittle">
                                        <p>${ listBooks[1].title }</p>
                                    </div>
                                </div>
                                <!--Data-->
                                <div class="item-box-blog-data" style="padding: px 15px;">
                                    <p class="text-price">$ ${ listBooks[1].page_count }.00</p>
                                </div>
                                <!--Text-->
                            </div>
                            <div class="mt">
                                <div tabindex="0" class="white read">
                                    <div id="${ listBooks[1].work_id }" class="shop-item-button">
                                        <svg class="display_block" width="40" height="43" viewBox="0 0 40 43" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3677 23.9957C9.88633 21.8343 9.42942 19.7248 8.9562 17.6152C7.92 12.9293 6.86748 8.2434 5.83944 3.54883C5.74969 3.13384 5.61915 2.96093 5.17856 2.97822C3.98734 3.02145 2.78796 2.99551 1.58858 2.99551C0.748198 2.98687 0.152588 2.40761 0.152588 1.59493C0.152588 0.782238 0.740039 0.202982 1.58042 0.194336C3.26118 0.194336 4.93379 0.194336 6.61455 0.194336C7.43045 0.194336 7.88736 0.583389 8.07502 1.4393C8.36874 2.75344 8.67879 4.06757 8.94804 5.39035C9.01331 5.71888 9.13569 5.79669 9.43758 5.79669C14.2351 5.78805 19.0326 5.78805 23.8383 5.78805C27.8281 5.78805 31.8178 5.7794 35.7994 5.78805C38.1574 5.79669 40.0177 7.93216 39.7321 10.3702C39.6179 11.4077 39.3242 12.4192 39.1039 13.4394C38.3695 16.7507 37.6352 20.0706 36.8928 23.3819C36.4114 25.5346 34.9183 26.7709 32.8132 26.7709C25.5517 26.7709 18.2901 26.7709 11.0286 26.7709C10.8491 26.7709 10.6696 26.7623 10.4901 26.7882C9.82105 26.9093 9.34783 27.5491 9.39678 28.258C9.43758 28.941 9.96792 29.5116 10.6288 29.5635C10.7757 29.5721 10.9307 29.5721 11.0857 29.5721C18.3636 29.5721 25.6333 29.5721 32.9111 29.5808C33.213 29.5808 33.5476 29.6413 33.825 29.7796C34.3308 30.039 34.5756 30.6961 34.4614 31.2667C34.339 31.8546 33.8739 32.3041 33.3109 32.3647C33.2049 32.3819 33.0906 32.3733 32.9846 32.3733C25.6006 32.3733 18.2167 32.3733 10.8328 32.3733C8.79301 32.3733 7.19384 30.99 6.83484 28.9496C6.42689 26.6499 7.8792 24.4539 10.0577 24.0649C10.1393 24.0476 10.229 24.0303 10.3677 23.9957ZM9.68235 8.58922C9.70683 8.72755 9.71499 8.8313 9.7313 8.9264C10.8246 13.8371 11.9261 18.7478 13.0031 23.6672C13.0684 23.9698 13.2071 23.9784 13.4355 23.9784C19.9138 23.9784 26.3839 23.9784 32.8622 23.9784C33.6781 23.9784 34.1268 23.5894 34.3145 22.7334C35.2202 18.6873 36.1177 14.6325 37.0233 10.5864C37.3007 9.3241 36.7377 8.58058 35.5057 8.58058C27.053 8.58058 18.592 8.58058 10.1393 8.58058C9.99239 8.58923 9.84553 8.58922 9.68235 8.58922Z" fill="#BA7D68"/>
                                            <path d="M14.6838 33.7827C16.8622 33.7827 18.6409 35.6675 18.6328 37.9845C18.6328 40.3015 16.8541 42.169 14.6675 42.1776C12.5053 42.1776 10.7185 40.3015 10.7103 38.0191C10.7103 35.6675 12.4808 33.7827 14.6838 33.7827ZM14.6593 36.5753C13.9413 36.5839 13.3539 37.215 13.3539 37.9758C13.3539 38.7539 13.9739 39.3851 14.7083 39.3678C15.4263 39.3505 16.0055 38.7107 15.9892 37.9413C15.9811 37.1891 15.3773 36.5666 14.6593 36.5753Z" fill="#BA7D68"/>
                                            <path d="M33.1558 38.0014C33.1477 40.3098 31.3608 42.1772 29.166 42.1686C26.9957 42.16 25.2171 40.2493 25.2334 37.9409C25.2497 35.6239 27.0365 33.7651 29.2232 33.7737C31.4016 33.7824 33.164 35.6844 33.1558 38.0014ZM30.5123 37.9841C30.5204 37.2233 29.9248 36.5835 29.215 36.5749C28.497 36.5662 27.8932 37.1801 27.8769 37.9409C27.8606 38.719 28.4644 39.3674 29.1987 39.3674C29.9167 39.3674 30.5123 38.7449 30.5123 37.9841Z" fill="#BA7D68"/>
                                        </svg>
                                        <svg class="display_none" width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_949_3)">
                                            <path d="M10.3875 23.8014C9.89798 21.64 9.43337 19.5304 8.95216 17.4209C7.89847 12.735 6.8282 8.04906 5.78281 3.3545C5.69155 2.93951 5.5588 2.7666 5.11078 2.78389C3.89946 2.82711 2.67984 2.80118 1.46022 2.80118C0.60566 2.79253 0 2.21328 0 1.40059C0 0.587902 0.597364 0.00864561 1.45193 0C3.16105 0 4.86188 0 6.571 0C7.40067 0 7.86529 0.389053 8.05611 1.24497C8.35479 2.5591 8.67007 3.87323 8.94386 5.19601C9.01023 5.52455 9.13469 5.60236 9.44166 5.60236C14.3201 5.59371 19.1986 5.59371 24.0854 5.59371C28.1425 5.59371 32.1996 5.58506 36.2484 5.59371C38.6461 5.60236 40.5378 7.73782 40.2474 10.1759C40.1312 11.2134 39.8325 12.2249 39.6085 13.2451C38.8618 16.5563 38.1151 19.8763 37.3601 23.1875C36.8706 25.3403 35.3523 26.5766 33.2118 26.5766C25.8277 26.5766 18.4436 26.5766 11.0595 26.5766C10.877 26.5766 10.6945 26.568 10.5119 26.5939C9.83161 26.7149 9.3504 27.3547 9.40018 28.0637C9.44166 28.7467 9.98095 29.3173 10.653 29.3691C10.8023 29.3778 10.96 29.3778 11.1176 29.3778C18.5183 29.3778 25.9106 29.3778 33.3113 29.3864C33.6183 29.3864 33.9585 29.447 34.2406 29.5853C34.7549 29.8446 35.0039 30.5017 34.8877 31.0723C34.7632 31.6602 34.2903 32.1098 33.7179 32.1703C33.61 32.1876 33.4938 32.179 33.386 32.179C25.8775 32.179 18.3689 32.179 10.8604 32.179C8.78622 32.179 7.16007 30.7957 6.79501 28.7553C6.38018 26.4556 7.85699 24.2596 10.0722 23.8705C10.1552 23.8532 10.2464 23.8359 10.3875 23.8014ZM9.69057 8.39489C9.71546 8.53322 9.72375 8.63697 9.74035 8.73207C10.8521 13.6428 11.9722 18.5535 13.0673 23.4728C13.1337 23.7754 13.2747 23.7841 13.5071 23.7841C20.0947 23.7841 26.6739 23.7841 33.2615 23.7841C34.0912 23.7841 34.5475 23.395 34.7384 22.5391C35.6593 18.493 36.5719 14.4382 37.4929 10.392C37.775 9.12977 37.2025 8.38624 35.9497 8.38624C27.3543 8.38624 18.7506 8.38624 10.1552 8.38624C10.0058 8.39489 9.8565 8.39489 9.69057 8.39489Z" fill="white"/>
                                            <path d="M14.7763 33.5881C16.9916 33.5881 18.8003 35.4729 18.792 37.7899C18.792 40.1069 16.9833 41.9744 14.7598 41.983C12.5611 41.983 10.7441 40.1069 10.7358 37.8245C10.7358 35.4729 12.5362 33.5881 14.7763 33.5881ZM14.7515 36.3807C14.0213 36.3893 13.424 37.0204 13.424 37.7813C13.424 38.5594 14.0545 39.1905 14.8012 39.1732C15.5313 39.1559 16.1204 38.5161 16.1038 37.7467C16.0955 36.9945 15.4816 36.372 14.7515 36.3807Z" fill="white"/>
                                            <path d="M33.5601 37.8073C33.5518 40.1157 31.7349 41.9832 29.503 41.9745C27.2961 41.9659 25.4874 40.0552 25.504 37.7468C25.5206 35.4298 27.3376 33.571 29.5611 33.5796C31.7763 33.5883 33.5684 35.4903 33.5601 37.8073ZM30.872 37.79C30.8803 37.0292 30.2746 36.3894 29.5528 36.3808C28.8227 36.3722 28.2087 36.986 28.1922 37.7468C28.1756 38.5249 28.7895 39.1733 29.5362 39.1733C30.2663 39.1733 30.872 38.5508 30.872 37.79Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_949_3">
                                            <rect width="40.2723" height="41.9744" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
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
                            <figure> <img class="vitrine-img hover" alt="" src="${ listBooks[2].published_works[0].cover_art_url }""> </figure>
                        </div>
                        <div class="item-box-blog-body">
                            <!--Heading-->
                            <div>
                                <div class="item-box-blog-heading">
                                    <div class="text-tittle" >
                                        <p>${ listBooks[2].title }</p>
                                    </div>
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
                                    <div id="${ listBooks[2].work_id }" class="shop-item-button">
                                        <svg class="display_block" width="40" height="43" viewBox="0 0 40 43" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3677 23.9957C9.88633 21.8343 9.42942 19.7248 8.9562 17.6152C7.92 12.9293 6.86748 8.2434 5.83944 3.54883C5.74969 3.13384 5.61915 2.96093 5.17856 2.97822C3.98734 3.02145 2.78796 2.99551 1.58858 2.99551C0.748198 2.98687 0.152588 2.40761 0.152588 1.59493C0.152588 0.782238 0.740039 0.202982 1.58042 0.194336C3.26118 0.194336 4.93379 0.194336 6.61455 0.194336C7.43045 0.194336 7.88736 0.583389 8.07502 1.4393C8.36874 2.75344 8.67879 4.06757 8.94804 5.39035C9.01331 5.71888 9.13569 5.79669 9.43758 5.79669C14.2351 5.78805 19.0326 5.78805 23.8383 5.78805C27.8281 5.78805 31.8178 5.7794 35.7994 5.78805C38.1574 5.79669 40.0177 7.93216 39.7321 10.3702C39.6179 11.4077 39.3242 12.4192 39.1039 13.4394C38.3695 16.7507 37.6352 20.0706 36.8928 23.3819C36.4114 25.5346 34.9183 26.7709 32.8132 26.7709C25.5517 26.7709 18.2901 26.7709 11.0286 26.7709C10.8491 26.7709 10.6696 26.7623 10.4901 26.7882C9.82105 26.9093 9.34783 27.5491 9.39678 28.258C9.43758 28.941 9.96792 29.5116 10.6288 29.5635C10.7757 29.5721 10.9307 29.5721 11.0857 29.5721C18.3636 29.5721 25.6333 29.5721 32.9111 29.5808C33.213 29.5808 33.5476 29.6413 33.825 29.7796C34.3308 30.039 34.5756 30.6961 34.4614 31.2667C34.339 31.8546 33.8739 32.3041 33.3109 32.3647C33.2049 32.3819 33.0906 32.3733 32.9846 32.3733C25.6006 32.3733 18.2167 32.3733 10.8328 32.3733C8.79301 32.3733 7.19384 30.99 6.83484 28.9496C6.42689 26.6499 7.8792 24.4539 10.0577 24.0649C10.1393 24.0476 10.229 24.0303 10.3677 23.9957ZM9.68235 8.58922C9.70683 8.72755 9.71499 8.8313 9.7313 8.9264C10.8246 13.8371 11.9261 18.7478 13.0031 23.6672C13.0684 23.9698 13.2071 23.9784 13.4355 23.9784C19.9138 23.9784 26.3839 23.9784 32.8622 23.9784C33.6781 23.9784 34.1268 23.5894 34.3145 22.7334C35.2202 18.6873 36.1177 14.6325 37.0233 10.5864C37.3007 9.3241 36.7377 8.58058 35.5057 8.58058C27.053 8.58058 18.592 8.58058 10.1393 8.58058C9.99239 8.58923 9.84553 8.58922 9.68235 8.58922Z" fill="#BA7D68"/>
                                            <path d="M14.6838 33.7827C16.8622 33.7827 18.6409 35.6675 18.6328 37.9845C18.6328 40.3015 16.8541 42.169 14.6675 42.1776C12.5053 42.1776 10.7185 40.3015 10.7103 38.0191C10.7103 35.6675 12.4808 33.7827 14.6838 33.7827ZM14.6593 36.5753C13.9413 36.5839 13.3539 37.215 13.3539 37.9758C13.3539 38.7539 13.9739 39.3851 14.7083 39.3678C15.4263 39.3505 16.0055 38.7107 15.9892 37.9413C15.9811 37.1891 15.3773 36.5666 14.6593 36.5753Z" fill="#BA7D68"/>
                                            <path d="M33.1558 38.0014C33.1477 40.3098 31.3608 42.1772 29.166 42.1686C26.9957 42.16 25.2171 40.2493 25.2334 37.9409C25.2497 35.6239 27.0365 33.7651 29.2232 33.7737C31.4016 33.7824 33.164 35.6844 33.1558 38.0014ZM30.5123 37.9841C30.5204 37.2233 29.9248 36.5835 29.215 36.5749C28.497 36.5662 27.8932 37.1801 27.8769 37.9409C27.8606 38.719 28.4644 39.3674 29.1987 39.3674C29.9167 39.3674 30.5123 38.7449 30.5123 37.9841Z" fill="#BA7D68"/>
                                        </svg>
                                        <svg class="display_none" width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_949_3)">
                                            <path d="M10.3875 23.8014C9.89798 21.64 9.43337 19.5304 8.95216 17.4209C7.89847 12.735 6.8282 8.04906 5.78281 3.3545C5.69155 2.93951 5.5588 2.7666 5.11078 2.78389C3.89946 2.82711 2.67984 2.80118 1.46022 2.80118C0.60566 2.79253 0 2.21328 0 1.40059C0 0.587902 0.597364 0.00864561 1.45193 0C3.16105 0 4.86188 0 6.571 0C7.40067 0 7.86529 0.389053 8.05611 1.24497C8.35479 2.5591 8.67007 3.87323 8.94386 5.19601C9.01023 5.52455 9.13469 5.60236 9.44166 5.60236C14.3201 5.59371 19.1986 5.59371 24.0854 5.59371C28.1425 5.59371 32.1996 5.58506 36.2484 5.59371C38.6461 5.60236 40.5378 7.73782 40.2474 10.1759C40.1312 11.2134 39.8325 12.2249 39.6085 13.2451C38.8618 16.5563 38.1151 19.8763 37.3601 23.1875C36.8706 25.3403 35.3523 26.5766 33.2118 26.5766C25.8277 26.5766 18.4436 26.5766 11.0595 26.5766C10.877 26.5766 10.6945 26.568 10.5119 26.5939C9.83161 26.7149 9.3504 27.3547 9.40018 28.0637C9.44166 28.7467 9.98095 29.3173 10.653 29.3691C10.8023 29.3778 10.96 29.3778 11.1176 29.3778C18.5183 29.3778 25.9106 29.3778 33.3113 29.3864C33.6183 29.3864 33.9585 29.447 34.2406 29.5853C34.7549 29.8446 35.0039 30.5017 34.8877 31.0723C34.7632 31.6602 34.2903 32.1098 33.7179 32.1703C33.61 32.1876 33.4938 32.179 33.386 32.179C25.8775 32.179 18.3689 32.179 10.8604 32.179C8.78622 32.179 7.16007 30.7957 6.79501 28.7553C6.38018 26.4556 7.85699 24.2596 10.0722 23.8705C10.1552 23.8532 10.2464 23.8359 10.3875 23.8014ZM9.69057 8.39489C9.71546 8.53322 9.72375 8.63697 9.74035 8.73207C10.8521 13.6428 11.9722 18.5535 13.0673 23.4728C13.1337 23.7754 13.2747 23.7841 13.5071 23.7841C20.0947 23.7841 26.6739 23.7841 33.2615 23.7841C34.0912 23.7841 34.5475 23.395 34.7384 22.5391C35.6593 18.493 36.5719 14.4382 37.4929 10.392C37.775 9.12977 37.2025 8.38624 35.9497 8.38624C27.3543 8.38624 18.7506 8.38624 10.1552 8.38624C10.0058 8.39489 9.8565 8.39489 9.69057 8.39489Z" fill="white"/>
                                            <path d="M14.7763 33.5881C16.9916 33.5881 18.8003 35.4729 18.792 37.7899C18.792 40.1069 16.9833 41.9744 14.7598 41.983C12.5611 41.983 10.7441 40.1069 10.7358 37.8245C10.7358 35.4729 12.5362 33.5881 14.7763 33.5881ZM14.7515 36.3807C14.0213 36.3893 13.424 37.0204 13.424 37.7813C13.424 38.5594 14.0545 39.1905 14.8012 39.1732C15.5313 39.1559 16.1204 38.5161 16.1038 37.7467C16.0955 36.9945 15.4816 36.372 14.7515 36.3807Z" fill="white"/>
                                            <path d="M33.5601 37.8073C33.5518 40.1157 31.7349 41.9832 29.503 41.9745C27.2961 41.9659 25.4874 40.0552 25.504 37.7468C25.5206 35.4298 27.3376 33.571 29.5611 33.5796C31.7763 33.5883 33.5684 35.4903 33.5601 37.8073ZM30.872 37.79C30.8803 37.0292 30.2746 36.3894 29.5528 36.3808C28.8227 36.3722 28.2087 36.986 28.1922 37.7468C28.1756 38.5249 28.7895 39.1733 29.5362 39.1733C30.2663 39.1733 30.872 38.5508 30.872 37.79Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_949_3">
                                            <rect width="40.2723" height="41.9744" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
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

carouselItem = [...carouselItem];

carouselItem[0].classList.add('active');

addBtns = [...addBtns];

if ( window.location.href === 'http://localhost/project/EcommerceBooks/index_Account.php' ) {
    addBtns.forEach(  btn => {
        btn.addEventListener( 'click', e =>{
            let actualID = parseInt(btn.id);

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

        btn.addEventListener( 'mouseover', () => {
            btn.children[0].classList.remove('display_block');
            btn.children[1].classList.remove('display_none');
            btn.children[0].classList.add('display_none');
            btn.children[1].classList.add('display_block');
        } )
        btn.addEventListener( 'mouseout', () => {
            btn.children[0].classList.remove('display_none');
            btn.children[0].classList.add('display_block');
            btn.children[1].classList.remove('display_block');
            btn.children[1].classList.add('display_none');
        } )
    })
}
else {
    addBtns.forEach ( btn => {
        btn.addEventListener( 'click', ()=> on_modal('login-section') );

        btn.addEventListener( 'mouseover', () => {
            btn.children[0].classList.remove('display_block');
            btn.children[1].classList.remove('display_none');
            btn.children[0].classList.add('display_none');
            btn.children[1].classList.add('display_block');
        } )
        btn.addEventListener( 'mouseout', () => {
            btn.children[0].classList.remove('display_none');
            btn.children[0].classList.add('display_block');
            btn.children[1].classList.remove('display_block');
            btn.children[1].classList.add('display_none');
        } )

        // Dibujar en el before
        iconCart.setAttribute('data-content', shoppingCartArray.length);

        console.log('goooool')
    } )
}


function getTotal(){
    let sumTotal;
    let supPrice = document.querySelectorAll('.cart-supPrice');
    let cont = 0
    supPrice = [...supPrice]

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
                <svg class="remove-item" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.63549 53.9998C1.67514 53.6908 0.832361 53.2246 0.366059 52.2698C-0.212527 51.0851 -0.0989235 49.9573 0.673845 48.8995C0.848213 48.6604 1.06485 48.4478 1.27621 48.2378C8.19678 41.3137 15.1187 34.3921 22.0392 27.468C22.1859 27.3214 22.3259 27.1695 22.5782 26.9067C22.38 26.768 22.1859 26.6703 22.0392 26.5237C15.0751 19.5665 8.1162 12.6067 1.15864 5.64559C-0.068541 4.4187 -0.328773 2.98976 0.417576 1.63082C1.33961 -0.0490498 3.58659 -0.515239 5.09514 0.668062C5.32895 0.851632 5.54559 1.06029 5.75694 1.2716C12.6815 8.1918 19.6034 15.1133 26.5226 22.0388C26.6692 22.1854 26.767 22.3795 26.907 22.5776C27.1699 22.3267 27.3218 22.1867 27.4684 22.0401C34.4286 15.0816 41.3875 8.1218 48.3477 1.16331C49.604 -0.0926312 51.0887 -0.342234 52.4559 0.462041C53.2961 0.955964 53.7135 1.74835 54.0001 2.63451C54.0001 2.9858 54.0001 3.33709 54.0001 3.68971C53.7571 4.68944 53.0966 5.40127 52.3912 6.10385C45.575 12.9052 38.7693 19.7184 31.9571 26.5237C31.8105 26.6703 31.6136 26.7654 31.4406 26.8843C31.4406 26.9595 31.4406 27.0361 31.4406 27.1114C31.6136 27.2303 31.8105 27.3267 31.9571 27.4719C38.7575 34.2654 45.5499 41.0667 52.3542 47.8548C53.0715 48.5706 53.7478 49.2904 54.0001 50.3073C54.0001 50.6586 54.0001 51.0099 54.0001 51.3625C53.8931 51.6372 53.798 51.9171 53.6765 52.1839C53.2181 53.1823 52.3635 53.6855 51.3635 53.9998C51.0121 53.9998 50.6607 53.9998 50.3094 53.9998C49.3094 53.7568 48.5987 53.0965 47.8959 52.3926C41.0942 45.5754 34.2807 38.7701 27.4737 31.9582C27.3271 31.8116 27.232 31.6148 27.0391 31.3335C26.7908 31.6386 26.6732 31.8129 26.5266 31.9595C19.7183 38.7701 12.9047 45.5767 6.10304 52.3926C5.40028 53.0965 4.6896 53.7568 3.68962 53.9998C3.33824 53.9998 2.98687 53.9998 2.63549 53.9998Z" fill="#BA7D68"/>
                </svg>
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

function drowCategory() {
    let vitrine       = document.getElementById("ul-vitrine");
    let pages         = document.getElementById('ul-pages');
    let category      = document.getElementById('Showcase-category');
    let numVitrines   = 0;
    let arrayVitrine  = [];
    let arrayCategory = [];
    let oneVitrine    = false;
    let twoVitrine    = false;

    vitrine.innerHTML  = '';
    pages.innerHTML    = '';
    category.innerHTML = '';

    productsArray.forEach( book => {
        if ( MaxPrice >= book.page_count && MinPrice <= book.page_count ) {
            arrayVitrine.push(book);
            book.categories.forEach( item => {
                arrayCategory.push( item );
            } )
        }
    } );

    arrayCategory = [... new Set(arrayCategory)];

    arrayCategory.forEach( categories =>{
        category.innerHTML +=
            `
            <span class="category-item">${categories}</span><br/>
            `
    } )

    if ( ((arrayVitrine.length/3) - Math.floor(arrayVitrine.length/3)) > 0.5  ){
        twoVitrine = true;
    }
    if ( ((arrayVitrine.length/3) - Math.floor(arrayVitrine.length/3)) < 0.5  ){
        oneVitrine = true;
    }

    arrayVitrine.forEach( (item, index) => {
        if ( (index+1)%3 === 0 ) {
            vitrine.innerHTML +=
                `
                <div class="vitrine">
                    <li class="vitrine-li">
                        <img class="vitrine-img hover" src="${arrayVitrine[index-2].published_works[0].cover_art_url}" alt="${arrayVitrine[index-2].title}">
                        <div class="vitrine-ctn">
                            <div class="text-tittle">
                                <p>${ arrayVitrine[index-2].title }</p>
                            </div>
                            <p class="text-price">
                                $ ${ arrayVitrine[index-2].page_count }.00
                            </p>
                        </div>
                    </li>
                    <li class="vitrine-li">
                        <img class="vitrine-img hover" src="${arrayVitrine[index-1].published_works[0].cover_art_url}" alt="${arrayVitrine[index-1].title}">
                        <div class="vitrine-ctn">
                            <div class="text-tittle">
                                <p>${ arrayVitrine[index-1].title }</p>
                            </div>
                            <p class="text-price">
                                $ ${ arrayVitrine[index-1].page_count }.00
                            </p>
                        </div>
                    </li>
                    <li class="vitrine-li">
                        <img class="vitrine-img hover" src="${arrayVitrine[index].published_works[0].cover_art_url}" alt="${arrayVitrine[index].title}">
                        <div class="vitrine-ctn">
                            <div class="text-tittle">
                                <p >${ arrayVitrine[index].title }</p>
                            </div>
                            <p class="text-price">
                                $ ${ arrayVitrine[index].page_count }.00
                            </p>
                        </div>
                    </li>
                </div>
                `
            numVitrines += 1;
        }
        if ( twoVitrine === true && arrayVitrine.length === index + 2 ){
            vitrine.innerHTML +=
                `
                <div class="vitrine">
                    <li class="vitrine-li">
                        <img class="vitrine-img hover" src="${arrayVitrine[index-1].published_works[0].cover_art_url}" alt="${arrayVitrine[index-1].title}">
                        <div class="vitrine-ctn">
                            <div class="text-tittle">
                                <p>${ arrayVitrine[index].title }</p>
                            </div>
                            <p class="text-price">
                                $ ${ arrayVitrine[index].page_count }.00
                            </p>
                        </div>
                    </li>
                    <li class="vitrine-li">
                        <img class="vitrine-img hover" src="${arrayVitrine[index].published_works[0].cover_art_url}" alt="${arrayVitrine[index].title}">
                        <div class="vitrine-ctn">
                            <div class="text-tittle">
                                <p>${ arrayVitrine[index].title }</p>
                            </div>
                            <p class="text-price">
                                $ ${ arrayVitrine[index].page_count }.00
                            </p>
                        </div>
                    </li>
                </div>
                `
            numVitrines += 1;
        }
        if ( oneVitrine === true && arrayVitrine.length === index + 1 ){
            vitrine.innerHTML +=
                `
                <div class="vitrine">
                    <li class="vitrine-li">
                        <img class="vitrine-img hover" src="${arrayVitrine[index].published_works[0].cover_art_url}" alt="${arrayVitrine[index].title}">
                        <div class="vitrine-ctn">
                            <div class="text-tittle">
                                <h5>${ arrayVitrine[index].title }</h5>
                            </div>
                            <p class="text-price">
                                $ ${ arrayVitrine[index].page_count }.00
                            </p>
                        </div>
                    </li>
                </div>
                `
            numVitrines += 1;
        }

    } );

    let vitrineimg = document.querySelectorAll('.vitrine-img');
    vitrineimg = [...vitrineimg];

    vitrineimg.forEach( (item, index) => {
        item.addEventListener('click', ()=>{
            infoShowcase.classList.add('active_modal');
            // body.classList.add('color');
            shopButton.id               = arrayVitrine[index].work_id;
            infoImg.src                 = arrayVitrine[index].published_works[0].cover_art_url;
            infoTittle.textContent      = arrayVitrine[index].title;
            infoDescription.textContent = arrayVitrine[index].summary;
            infoPrice.textContent       = `$ ${arrayVitrine[index].page_count}.00`
        })
    } )

    for ( let i = 0; i < Math.ceil( numVitrines/2 ); i ++  ){
        pages.innerHTML +=
        `
            <li><label for="pages${i+1}">${i+1}</label></li>
        `
    }

}

function drowInfo() {
    let vitrineimg = document.querySelectorAll('.vitrine-img');
    vitrineimg = [...vitrineimg];

    vitrineimg.forEach( (item, index) => {
        item.addEventListener('click', ()=>{
            infoShowcase.classList.add('active_modal');
            showcaseSection.classList.add('color');
            shopButton.id               = arrayVitrine[index].work_id;
            infoImg.src                 = arrayVitrine[index].published_works[0].cover_art_url;
            infoTittle.textContent      = arrayVitrine[index].title;
            infoDescription.textContent = arrayVitrine[index].summary;
            infoPrice.textContent       = `$ ${arrayVitrine[index].page_count}.00`
        })
    } )
}

let range = document.getElementById('range')

range.addEventListener('click', ()=>{
    drowCategory();
})

drowCategory()