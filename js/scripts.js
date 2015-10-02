$(function () {

    $('#submit-btn').click(function(event){
        event.preventDefault();
        var imie = $('#Imie');
        var email = $('#Email');

        function validateEmail(em)
        {
            var re = /\S+@\S+\.\S+/;
            return re.test(em.val());
        }

        function validateName(nameFiled)
        {
            return nameFiled.val().trim().length !== 0;
        }

        if(validateName(imie) && validateEmail(email)) {
            $('#contact-form').submit();
            $('#cntform').html("<h3>Thanks!</h3> <p>We will get in touch soon</p>");
        } else {
            if(!validateName(imie)){
                imie.parent().find('.err').show();
                imie.parent().find('.err').html('Come on, what\'s your name? :)');
                imie.addClass('err-inp');
            }
            if(!validateEmail(email)){
                email.parent().find('.err').show();
                email.parent().find('.err').html('Hm, this address seems incorrect. Please double check it');
                email.addClass('err-inp');
            }
        }


        $("input").focus(function()
        {
            $( this ).parent().find('.err').fadeOut( 100 );
            $( this ).removeClass('err-inp');
        });

    }); // Walidacja formularza




    //  A N I M A C J A
    var windowHeight = window.innerHeight;
    var $elementsToAnimate = $('.animate');
    var animations = {
        'animate': {
            opacity: 1
        },
        'moveTop': {
            top: 0
        },
        'moveBottom': {
            top: 10
        },
        'moveRight': {
            marginLeft: 10
        },
        'moveLeft': {
            marginLeft: -10
        }
    };

    function checkIfPresent(element)
    {
        presentWindowPosition = $(window).scrollTop();
        var divPosition = element.offset().top;
        return (divPosition < (presentWindowPosition + windowHeight));
    }

    function animateElementsOnShow ($elements)
    {
        $elements.css({ opacity: 0 });

        $(window).scroll(function () {
            $elements.each( function() {
                var $element = $(this);

                if( checkIfPresent( $(this) ) ) {
                    $(this).attr('class').split(/\s+/).forEach(function (className) {
                        $element.animate(animations[className], 600);
                    });
                }
            });
        });
    }

    animateElementsOnShow($elementsToAnimate);

    var mnoz = 1;
    $elementsToAnimate.each( function() {
        var $element = $(this);

        if( checkIfPresent( $(this) ) ) {
            $(this).attr('class').split(/\s+/).forEach(function (className) {

                $element.delay( mnoz*200 ).animate(animations[className], 400);

            });
            mnoz++;
        }

    });


});


//menu start//
//$(document).ready(function() {
//    $('#showmenu').click(function() {
//        $('.navi').slideToggle("fast");
//    });
//});

//function setAsClicked (a) {
//    var links = document.getElementsByClassName("menulink");
//    for (var i = 0; i < links.length; i++) {
//        links[i].className = "menulink";
//            }
//    a.className += " clicked";
//}



$(document).ready(function(){
    $('.menulink').click(function(){
        $('.menulink').removeClass('clicked');
        $(this).addClass('clicked');
    });
    $('#mnav').mouseleave(function () {
        $('.menulink').removeClass('clicked');
    })
});


//menu end//



// ************** katban - obsluga klikacza w zajawca *******************
$(document).ready(function(){
    $('.btnzaj').click(function(){
        $('.form').show();
    });
    //
    $('.form').click(function(event){
        event.stopPropagation();
        $(this).hide();
    });
    $('#cntform').click(function(event){
        event.stopPropagation()
    })
});
//***********************************************************************



// koniec menu
