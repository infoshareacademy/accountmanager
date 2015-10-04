<?php
$lang = 'en';
include_once('db.php');
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Papikaan AM - The best account manager app ever.">
    <meta name="author" content="Papikaan">
    <meta name="keywords" content="customer, customers, account, manager, contact, contacts, client, clients, address">
    <title>Papikaan AM - Main page</title>
    <link rel="shortcut icon" href="images/favicon.jpg" type="image/x-icon"/>
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise|Bad+Script|Josefin+Slab" rel="stylesheet" type="text/css">
    <script src="js/jquery-2.1.4.min.js"></script>
    <script>
        var config = {
            vCards: {
                vCard1: {
                    name: 'vCard1',
                    photo: './images/visit-cards-game/ania.png',
                    text: '11111 111111 11111!'
                },

                vCard2: {
                    name: 'vCard2',
                    photo: './images/visit-cards-game/kasia.jpg',
                    text: '22222 22222 22222 22222!'
                },

                vCard3: {
                    name: 'vCard3',
                    photo: './images/visit-cards-game/piotr.png',
                    text: '33333 33333 33333 33333!'
                },

                vCard4: {
                    name: 'vCard4',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: '4444444 4444444 4444444 4444444!'
                },

                vCard5: {
                    name: 'vCard5',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: '5555555 5555555 5555555 5555555 5555555!'
                },

                vCard6: {
                    name: 'vCard6',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: 'You can easily update the contacts using \.vCards'
                },

                vCard7: {
                    name: 'vCard7',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: '7777777 7777777 7777777 7777777!'
                },

                vCard8: {
                    name: 'vCard8',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: '88888888 88888888 88888888 88888888!'
                },

                vCard9: {
                    name: 'vCard9',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: '9999999 9999999 9999999 9999999 9999999!'
                },

                vCard10: {
                    name: 'vCard10',
                    photo: './images/visit-cards-game/pawel.jpg',
                    text: 'Thank you for your attention!'
                }

            }
        };

        config.vCards.vCard1.nextVCard = config.vCards.vCard2;
        config.vCards.vCard2.nextVCard = config.vCards.vCard3;
        config.vCards.vCard3.nextVCard = config.vCards.vCard4;
        config.vCards.vCard4.nextVCard = config.vCards.vCard5;
        config.vCards.vCard5.nextVCard = config.vCards.vCard6;
        config.vCards.vCard6.nextVCard = config.vCards.vCard7;
        config.vCards.vCard7.nextVCard = config.vCards.vCard8;
        config.vCards.vCard8.nextVCard = config.vCards.vCard9;
        config.vCards.vCard9.nextVCard = config.vCards.vCard10;

    </script>
</head>
<body>

<div id="nav-anchor"></div>

<nav id="menubar">

    <div id="logo">
    </div>

    <div id="mnav">
        <div id="hamburgerpic">
            <i class="icon-menu"></i>
        </div>
        <ul class="navi">
            <li class="menulink"><a href="#zajawka" class="smoothScroll">home</a></li>
            <li class="menulink"><a href="#whyus" class="smoothScroll">what</a></li>
            <li class="menulink"><a href="#values" class="smoothScroll">why</a></li>
            <li class="menulink" ><a href="#team" class="smoothScroll">who</a></li>
            <!--            <li class="menulink"><a class="smoothScroll">FAQ</a></li>-->
            <li class="menulink"><a href="#contact" class="smoothScroll">contact</a></li>
        </ul>
    </div>

</nav>


<div class="zajawka" id="zajawka">
    <div id="tekst_zajawki">
        <p>Too many accounts? <br>Customers lost in action?<br>Redundant phone numbers?
            <br></p>

        <h1>Let us organise your business</h1>

        <div class="btnzaj">Try us out</div>
    </div>

    <div class="form">
        <div id="cntform" class="formularz">

            <form action="" id="contact-form" method="post">
                <h3>Don't be shy</h3>

                <p>We won't spam you :)</p>

                <div class="form-group">
                    <label for="Imie"></label><span class="err"></span>
                    <input type="text" name="imie" id="Imie" placeholder="Name..."/><br>
                </div>
                <div class="form-group">
                    <label for="Email"></label><span class="err"></span>
                    <input type="email" name="email" id="Email" placeholder="E-mail..."/><br>
                </div>

                <input type="submit" id="submit-btn" value="Sure, contact me"/>
            </form>
        </div>
    </div>
</div>

<div class="core_functions" id="whyus">

    <section class="functionsModuleOdd">
        <div class="txtSectionOdd">
            <h2 class="functionsHeader">All contacts in one place</h2>
            <article class="functionsDescription">Wide set of labels and folders allows you to easily organize your accounts</article>
        </div>
        <div class="photoSectionOdd functionalitiesIcon">
            <i class="icon-one-place"></i>
        </div>
    </section>

    <section class="functionsModuleEven">
        <div class="photoSectionEven functionalitiesIcon">
            <i class="icon-control"></i>
        </div>
        <div class="txtSectionEven">
            <h2 class="functionsHeader">Have control</h2>
            <article class="functionsDescription">Time box the action - we will notify you when it's time to get back to your Customer</article>
        </div>
    </section>

    <section class="functionsModuleOdd">
        <div class="txtSectionOdd">
            <h2 class="functionsHeader">Work in group</h2>
            <article class="functionsDescription">In case of need you can give access to an account to any Team member</article>
        </div>
        <div class="photoSectionOdd functionalitiesIcon">
            <i class="icon-group-work"></i>
        </div>
    </section>
</div>

<section id="values">
    <div class="column">
        <i class="icon-diamond"></i>

        <p>Add value to your business</p>
    </div>
    <div class="column">
        <i class="icon-shield"></i>

        <p>Protect sensitive data</p>

    </div>
    <div class="column">
        <i class="icon-time"></i>

        <p>Don't waste your time</p>

    </div>
    <div class="column">
        <i class="icon-tree"></i>

        <p>Develop good practice</p>

    </div>
    <div class="clearfix" style="height: 50px"></div>
</section>

<section id="team">
    <h2>Our Team</h2>
    <!--     Photo of our team-->
</section>

<section id="contact">
    <h2>Contact us</h2>

    <p>Do you have any quetions? Suggestions?<br><br>
        We want to make your life easier so please let us know what you need!<br>
        Do not hesitate to ask - knowledge is the key to success.<br><br>So is our Product, of course.</p>
    <a href="mailto:papikaanteam@gmail.com" class="btn" id="btn-sm" title="Submit your question"><i
            class="icon-envelope"></i>Get in touch</a>

    <br/>

    <div>
        <p> Follow us:</p>
        <a href="http://facebook.com/PapikaanAM" target="_blank"><i class="icon-facebook"></i>Facebook</a>
        <a href="http://twitter.com/PapikaanAM" target="_blank"><i class="icon-twitter"></i>Twitter</a>
        <a href="https://plus.google.com/104811270078153912035/posts" target="_blank"><i class="icon-gplus"></i>Google+</a>
    </div>
</section>

<footer>
    <p>&copy; Papikaan Account Manager</p>
</footer>

<!--hidden divs, timer and result section for visitCardGame -->

<div class="visitCard animatedCard" id="vCard1">
    <div class="photo">
    </div>
    <p class="vCardInput"></p>
</div>



<div class="timer">
    <span></span>
</div>



<div class="sum">score:</div>

<!--end of section containing hidden divs-->

<script type="text/javascript" src="js/scripts.js"></script>
</body>
</html>