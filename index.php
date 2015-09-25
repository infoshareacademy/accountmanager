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
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/parallax.min.js"></script>
</head>
<body>

<nav class="menu">
    <div id="logo">
    </div>

    <div id="mnav">
        <div id="hamburgerpic">
            <i class="icon-menu"></i>
        </div>
        <ul class="navi">
            <li class="menulink"><a href="#zajawka">Home</a></li>
            <li class="menulink"><a href="#utilities">Why us?</a></li>
            <li class="menulink"><a href="#features">Values</a></li>
            <li class="menulink"><a href="#team">Team</a></li>
            <li class="menulink"><a>FAQ</a></li>
            <li class="menulink"><a href="#sm">Contact</a></li>
        </ul>
    </div>

</nav>



<a name="zajawka"></a>
<div class="zajawka">
    <div id="tekst_zajawki">
    <p>Too many accounts? <br>Customers lost in action?<br>Redundant phone numbers?
        <br> </p>
        <h1>Let us organise your business</h1>
        <div class="btnzaj">Try us out</div></div>

    <div class="form"><div id="cntform" class="formularz">

            <form action="" id="contact-form" method="post">
            <h3>Don't be shy</h3><p>We won't spam you :)</p>
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
</div></div>

<a name="utilities"></a>
<div class="functionsMainContener">

    <section class="functionsModuleOdd">
        <div class="txtSectionOdd">
            <h2 id="functionsHeader">All contacts in one place</h2>
            <article id="functionsDescription">Wide set of labels and folders allows you to easily organize your accounts</article>
        </div>
        <div class="photoSectionOdd">
            <i class="icon-one-place"></i>
        </div>
    </section>

    <section class="functionsModuleEven">
        <div class="photoSectionEven">
            <i class="icon-control"></i>
        </div>
        <div class="txtSectionEven">
            <h2 id="functionsHeader">Have control</h2>
            <article id="functionsDescription">Time box the action - we will notify you when it's time to get back to your Customer</article>
        </div>
    </section>

    <section class="functionsModuleOdd">
        <div class="txtSectionOdd">
            <h2 id="functionsHeader">Work in group</h2>
            <article id="functionsDescription">In case of need you can give access to an account to any Team member</article>
        </div>
        <div class="photoSectionOdd">
            <i class="icon-group-work"></i>
        </div>
    </section>
</div>


<a name="features" class="clearfix"></a>
<section id="features" >
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
</section>

<section id="team" class="parallax-window" data-parallax="scroll" data-image-src="../images/team-photo.jpg">
    <h2>Our Team</h2>
    <!-- Photo of our team -->
</section>

<section id="sm">
    <h2>Contact us</h2>
    <p>Do you have any quetions? Suggestions?<br><br>
        We want to make your life easier so please let us know what you need!<br>
        Do not hesitate to ask - knowledge is the key to success.<br><br>So is our Product, of course.</p>
    <a href="mailto:papikaanteam@gmail.com" class="btn" id="btn-sm" title="Submit your question"><i class="icon-envelope"></i>Get in touch</a>

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

<script type="text/javascript" src="js/scripts.js"></script>
</body>
</html>