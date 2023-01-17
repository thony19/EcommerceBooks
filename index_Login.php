<?php
session_start();
include "./base/database.php";

// if ( empty($_SESSION['name']) ){
//     header("location: index_Login.php");
// }
// else{
//     header("location: index_Account.php");
// }
?>

<!DOCTYPE html>
<html lang="en"  id="html">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" name="Ecommerce books" content="width=device-width, initial-scale=1.0">
    <title>Ecommerce Books</title>
    <link rel="icon" href="./assets//icon/Logo.svg" type="image/x-icon">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <header class="header-books" id="header-books">
        <nav class="nav-books" id="nav-books">
            <div class="nav-books-left" id="nav-books-left">
                <div class="container-logo">
                    <div class="logo-books" id="logo-books">
                        <img class="hover" src="assets/icon/Logo.svg" alt="" onclick="scrollNavigation('section-home')">
                    </div>
                </div>
                <div class="container-ctn">
                    <div class="books-btn btn-Primary" onclick="scrollNavigation('section-about')">About Us</div>
                    <div class="books-btn btn-Primary" id="btn-category">
                        <p>Categories</p>
                        <div class="subMenuGrap" id="subMenuGrap">
                            <div class="subMenu">
                                <div class="menuItem" onclick="on_modal('showcase-section')">Ciencia Ficción</div>
                                <div class="menuItem" onclick="on_modal('showcase-section')">Fantasía</div>
                                <div class="menuItem" onclick="on_modal('showcase-section')">Histórico</div>
                                <div class="menuItem" onclick="on_modal('showcase-section')">Terror</div>
                                <div class="menuItem" onclick="on_modal('showcase-section')">Romance</div>
                            </div>
                        </div>
                    </div>
                    <div class="books-btn btn-Primary" onclick="scrollNavigation('section-review')">Reviews</div>
                    <div class="books-btn btn-Primary" onclick="scrollNavigation('section-contact')">Contact Us</div>
                </div>
            </div>
            <div class="nav-books-right" id="nav-books-right">
                <div class="logo-user">
                    <div class="icon-user" id="icon-user">
                        <img src="assets/icon/user.svg" alt="">
                        <div class="subMenuGrapUser" id="subMenuGrapUser">
                            <div class="subMenu">
                                <div class="btn-Secondary" id="Login" onclick="on_modal('login-section')">Login</div>
                                <div class="btn-Secondary" id="Register" onclick="on_modal('register-section')">Register</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ico-cart hover" id="icon-cart" onclick="on_modal('login-section')">
                    <img src="assets/icon/cart.svg" alt="">
                </div>
            </div>
        </nav>
    </header>
    <section class="Section section-home" id="section-home">
        <div class="social-media">
            <div class="icon-social">
                <img class="hover" src="assets/icon/facebook.svg" alt="">
            </div>
            <div class="icon-social">
                <img class="hover" src="assets/icon/ig.svg" alt="">
            </div>
            <div class="icon-social">
                <img class="hover" src="assets/icon/shel.svg" alt="">
            </div>
            <div class="icon-social">
                <img class="hover" src="assets/icon/google.svg" alt="">
            </div>
        </div>
        <div class="container-home-title">
            <h2 class="home-title">Un Buen Libro No Termina, Se Esconde Dentro De Nosotros.</h2>
        </div>
        <div class="lottie-circle">
            <lottie-player src="./assets/icon/circle.json" background="transparent"  speed="1"  style="width: 40vw; height: 40vw;" loop autoplay></lottie-player>
        </div>
        <div class="lottie-circle" style="bottom: 40%;">
            <lottie-player src="./assets/icon/circle.json" background="transparent"  speed="1"  style="width: 20vw; height: 20vw;" loop autoplay></lottie-player>
        </div>
        <div class="abook"><span class="hover">@book</span></div>
    </section>

    <section class="Section" id="section-about">
        <div class="container-title">
            <h2 class="header-title">About</h2>
        </div>
        <div class="about-container">
            <p class="ctn-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        <div class="ctn-img">
            <div class="about-img">
                <img src="assets/img/about.png" alt="">
            </div>
        </div>
        <div class="lottie-about-lg">
            <lottie-player src="./assets/icon/circle.json" background="transparent"  speed="1"  style="width: 40vw; height: 40vw;" loop autoplay></lottie-player>
        </div>
        <div class="lottie-about-sm">
            <lottie-player src="./assets/icon/circle.json" background="transparent"  speed="1"  style="width: 20vw; height: 20vw;" loop autoplay></lottie-player>
        </div>
    </section>

    <section class="Section" id="section-category">
        <div class="container-title">
            <h2 class="header-title">Category</h2>
        </div>

        <div class="container-gallery">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <div class="img1 hover_img" onclick="on_modal('showcase-section')">
                        <img
                            src="./assets/icon/ScienceFiction.svg"
                            class="w-100 shadow-1-strong mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div class="img2 hover_img" onclick="on_modal('showcase-section')">
                        <img
                            src="./assets/icon/fantacy.svg"
                            class="w-100 shadow-1-strong mb-4"
                            alt="Mountains in the Clouds"
                        />
                    </div>
                    <div class="img3 hover_img" onclick="on_modal('showcase-section')">
                        <img
                            src="./assets/icon/historico.svg"
                            class="w-100 shadow-1-strong mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div class="img4 hover_img" onclick="on_modal('showcase-section')">
                        <img
                            src="./assets/icon/terror.svg"
                            class="w-100 shadow-1-strong mb-4"
                            alt="Waves at Sea"
                        />
                    </div>
                    <div class="img5 hover_img" onclick="on_modal('showcase-section')">
                        <img
                            src="./assets/icon/love.svg"
                            class="w-100 shadow-1-strong mb-4 img5"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="container cta-100 ">
            <div class="container">
                <div class="row blog">
                    <div class="col-md-12">
                        <div id="blogCarousel" class="carousel slide container-blog" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#blogCarousel" data-slide-to="1"></li>
                                <li data-target="#blogCarousel" data-slide-to="2"></li>
                                <li data-target="#blogCarousel" data-slide-to="3"></li>
                                <li data-target="#blogCarousel" data-slide-to="4"></li>
                                <li data-target="#blogCarousel" data-slide-to="5"></li>
                                <li data-target="#blogCarousel" data-slide-to="6"></li>
                                <li data-target="#blogCarousel" data-slide-to="7"></li>
                            </ol>

                            <div class="carousel-inner" id="carousel-inner">
                                
                            </div>
                        </div>
                        <!--.Carousel-->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="leaveYour" id="leaveYour">
        <div class="lottie-about-lg">
            <lottie-player src="./assets/icon/circle.json" background="transparent"  speed="1"  style="width: 40vw; height: 40vw;" loop autoplay></lottie-player>
        </div>
        <div class="lottie-about-sm">
            <lottie-player src="./assets/icon/circle.json" background="transparent"  speed="1"  style="width: 20vw; height: 20vw;" loop autoplay></lottie-player>
        </div>
        <div class="containerButtonC" id="containerButtonC">
            <div class="buttonC" id="buttonC" onclick="clouseReviews()">
                <img  id="button_close_reviews" src="assets/icon/close.svg" alt="">
            </div>
        </div>
        <div class="containerTittleLeaveY">
            <h2 class="textleaveYour" id="textleaveYour">
                Leave Your Feedback
            </h2>
        </div>
        <div class="row ">
            <div class="col-lg-7 mx-auto">
                <div class=" mx-auto p-4 ">
                    <div class="card-body ">
                        <div class = "container">
                            <form id="contact-form" role="form" action="./review/reviews.php" method="POST">
                                <div class="controls">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="form_name" type="text" name="name" class="form-control formCont" placeholder="Name" required="required" data-error="Firstname is required.">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="form_email" type="email" name="email" class="form-control formCont" placeholder="Email" required="required" data-error="Email is required.">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea id="form_message" name="message" class="form-control formCont" placeholder="Description" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                                </div>
                                            </div>
                                        <div class="col-md-12 containerSend" ></div>
                                    </div>
                                </div>
                                <div class="containerSend" >
                                    <input type="submit" class="buttonSend" value="Send">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="Section" id="section-review">
        <div class="container-title">
            <h2 class="header-title">Reviews</h2>
        </div>
        <div class="containerReviews">
            <div class="reviews">
                <div class="testimonials" id="testimonials" >
                    <div class="card">
                        <div class="layer"></div>
                        <div class="content">
                            <div class="details">
                                <h2>
                                    Someone Famous 2 <br>
                                </h2>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Quis nostrum deleniti nemo repellat.Id, aliquid necessitatibus perferendis
                                praesentium itaque doloribus molestias quaerat a deleniti distinctio voluptate,
                                reprehenderit omnis, dolorem ratione.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="layer"></div>
                        <div class="content">
                            <div class="details">
                                <h2>
                                    Someone Famous 3 <br>
                                </h2>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum deleniti nemo repellat. 
                                Id, aliquid necessitatibus perferendis praesentium itaque doloribus molestias quaerat a deleniti distinctio voluptate, 
                                reprehenderit omnis, dolorem ratione.
                            </p>
                        </div>
                    </div>

                    <?php
                        include "./review/drowReview.php"
                    ?>
                </div>
            </div>
            <div class="ContainerLeaveYour">
                <button class="btn-send leave" onclick="modalReviews()">
                    Leave Your Feedback
                </button>
            </div>
        </div>
    </section>

    <section class="Section" id="section-contact">
        <div class="container-title">
            <h2 class="header-title">Contact Us</h2>
        </div>
        <div class="containerContact">
            <div class="contact">
                <div class="row ">
                    <div class="card-body ">
                        <div class = "container">
                            <form id="contact-form" role="form" action="./review/contacto.php" method="POST">
                                <div class="controls">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="" type="text" name="name" class="form-control formCont" placeholder="Name" required="required" data-error="Firstname is required.">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="" type="email" name="email" class="form-control formCont" placeholder="Email" required="required" data-error="Lastname is required.">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input id="" type="tel" name="tel" class="form-control formCont" placeholder="Phone Number" required="required" data-error="Valid  is required.">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <select id="form_need" name="need" class="form-control formCont" required="required" data-error="Please specify your need.">
                                                    <option value="" selected disabled>--Select Category--</option>
                                                    <option >Category 1</option>
                                                    <option >Category 2</option>
                                                    <option >Category 3</option>
                                                    <option >Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea id="form_message" name="message" class="form-control formCont" placeholder="Description" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 containerSend" >
                                            <input type="submit" class="buttonSend" value="Send" >
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- /.8 -->
                <!-- /.row-->
                </div>
            </div>
            <div class="imgContact">
                <img style="cursor: pointer;" src="./assets/img/imgContact.png" alt="#">
            </div>
        </div>
    </section>

    <!-- SECTION MODAL -->
    <section class="register-section" id="register-section">
        <div class="close-modal" onclick="close_modal()">
            <img src="assets/icon/close.svg" alt="">
        </div>

        <div class="ctn-modal">
            <div class="ctn-heading">
                <h2 class="modal-tittle">Create Account</h2>
            </div>
            <form action="./control_user/registro.php" class="form-container" method="POST">
                <input type="text"     name="name"         placeholder="Your username"    class="form-control form-input" required="required" data-error="Firstname is required.">
                <input type="email"    name="email"        placeholder="Your email"       class="form-control form-input" required="required" data-error="Email is required.">
                <input type="password" name="password"     placeholder="Password"         class="form-control form-input" required="required" data-error="Password is required.">
                <input type="password" name="confPassword" placeholder="Confirm password" class="form-control form-input" required="required" data-error="Password is required.">
                <div class="container-send">
                    <input type="submit" class="btn-send" value="Register" name="btn-send">
                </div>
            </form>

        </div>
    </section>

    <section class="login-section" id="login-section">
        <div class="close-modal" onclick="close_modal()">
            <img src="assets/icon/close.svg" alt="">
        </div>
        <div class="logo-login">
            <img src="assets/icon/user.svg" alt="icon Logo">
        </div>
        <div class="ctn-modal">
            <div class="ctn-heading">
                <h2 class="modal-tittle">Login</h2>
            </div>
            <form action="./control_user/login.php" class="form-container" method="POST">
                <input type="text"     name="name"     placeholder="Your username" class="form-control form-input" required="required" data-error="Firstname is required.">
                <input type="password" name="password" placeholder="Password"      class="form-control form-input" required="required" data-error="Password is required.">

                <div class="container-send">
                    <input type="submit" class="btn-send" onclick="close_modal()" value="Sing in">
                </div>
            </form>

        </div>
    </section>

    <section class="checkout-section" id="checkout-section">
        <div class="container-title">
            <h2 class="header-title">Checkout</h2>
        </div>
        <div class="cart-items">

        </div>
        <div class="cart-total">
            <strong class="cart-total-title" id="cart-total-title">Total</strong>
            <span class="cart-total-price" id="cart-total-price"></span>
        </div>
        <div class="send-checkout">
            <button class="btn-send btn-pay" onclick="close_modal()" type="submit">Pay</button>
            <button class="btn-send btn-pay" onclick="close_modal()" type="button">Close</button>
        </div>
    </section>

    <section class="showcase-section" id="showcase-section">
        <div class="container-title">
            <h2 class="header-title">Category</h2>
        </div>
        <div class="containerShowcase">
            <div class="columnCategory">
                <div>
                    <h3 class="textCategory">
                        Categories
                    </h3>
                    <br/>
                    <div>
                        <ul class="textUl" id="Showcase-category">
                            
                        </ul>
                        <br/>
                    </div>
                </div>
                <div class="flex aifs f-wrap w-100vw">
                    <div class="m-m rubber-ipt-ctn">
                        <div >
                            <h5 class="textCategory">Rango De Precio</h5>
                        </div>
                        <div class=" flex aic" id="range">
                            <div class="rubber-ipt mb-m mt-s">
                                <div class="rubber-ipt-range"></div>
                                <div class="rubber-ipt-min"></div>
                                <div class="rubber-ipt-max"></div>
                                <div class="w-100 flex jcsb mt-s">
                                    <p class="rubber-value-min">$0</p>
                                    <p class="rubber-value-max">$1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                    <h3 class="textCategory">
                        Tipos de libros
                    </h3>
                    <br/>
                    <div>
                        <ul class="textUl">
                            Empastado
                            <br/>
                            Laminado
                            <br/>
                            Virtual
                            <br/>
                        </ul>
                        <br/>
                    </div>
                </div>
            </div>
            <div class="containerCarruseles">
                <div class="box-paginacao">
                    <input type="radio" name="input-paginacao" id="pages1" checked>
                    <input type="radio" name="input-paginacao" id="pages2">
                    <input type="radio" name="input-paginacao" id="pages3">
                    <input type="radio" name="input-paginacao" id="pages4">
                    <input type="radio" name="input-paginacao" id="pages5">
                    <input type="radio" name="input-paginacao" id="pages6">
                    <input type="radio" name="input-paginacao" id="pages7">
                    <input type="radio" name="input-paginacao" id="pages8">
                    <input type="radio" name="input-paginacao" id="pages9">
                    <div class="box-vitrines">
                        <ul id="ul-vitrine">
                            
                        </ul>
                        <div class="btn-paginacao">
                            <ul class="ul-pages" id="ul-pages">
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="info-showcase" id="info-showcase">
        <div class="info-img">
            <img id="info-img" src="" alt="img">
            <div class="info-price" id="info-price"></div>
        </div>
        <div class="info-ctn">
            <div class="container-info">
                <div class="info-tittle" id="info-tittle"></div>
                <div class="close-modal" onclick="close_pop()">
                    <img src="assets/icon/close.svg" alt="">
                </div>
            </div>
            <div class="info-description" id="info-description"></div>
            <div class="info-cart">
                <div class="add-cart">
                    ADD CART
                </div>
                <div class="shop-button shop-item-button" id="">
                    <img class="display_block" src="./assets/icon/cart.svg" alt="Icon Cart">
                    <img class="display_none" src="./assets/icon/cartWhite.svg" alt="Icon Cart">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer-books" id="footer-books">
        <div class="container-books">
            <div class="row-one-book">
                <div class="one-book-col">
                    <div class="col-svg">
                        <img src="assets/icon/tel.svg" alt="tel">
                    </div>
                    <div class="col-tel">
                        <a class="col-inf" href="tel:+(204) 9442-1614">(+504) 9429-1614</a>
                    </div>
                </div>
                <div class="one-book-col">
                    <div class="col-svg">
                        <img src="assets/icon/email.svg" alt="Email">
                    </div>
                    <div class="col-email">
                        <a class="col-inf" href="mailto:books@hotmail.com"> books@hotmail.com </a>
                    </div>
                </div>
                <div class="one-book-col">
                    <div class="col-svg">
                        <img src="assets/icon/location.svg" alt="Location">
                    </div>
                    <div class="col-adress">
                        <p class="col-inf"> 246 WHITE STREET </p>
                    </div>
                </div>

            </div>
            <div class="row-two-book">
                <h3 id="copyright" class="title_copyright">© COPYRIGHT 20223  |  Powered By  All Rights Reserved</h3>
            </div>
        </div>
    </footer>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

    <script src="script/main.js"></script>
    <script type="module" src="./script/script.js"></script>
</body>
</html>