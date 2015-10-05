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
    var speed = 100;
    var animations = {
        'animate': {
            opacity: 1
        },
        'moveTop': {
            top: 0
        },
        'moveBottom': {
            bottom: 0
        },
        'moveRight': {
            right: 10
        },
        'moveLeft': {
            left: 0
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
        $('.moveTop').css({top : 20 });
        $('.moveBottom').css({ bottom : 20  });
        $('.moveLeft').css({ left : 50  });
        $('.moveRight').css({ right : 50  });

        $(window).scroll(function () {

            $elements.each( function(k, v) {
                speed = speed /3;
                var $element = $(this);
                setTimeout( function () {
                if( checkIfPresent( $element ) ) {
                    $element.attr('class').split(/\s+/).forEach(function (className) {
                        $element.animate(animations[className], 400);
                    });
                }
                }, k*speed);
            });
        });
    }
    animateElementsOnShow($elementsToAnimate);


    $elementsToAnimate.each( function(k, v) {
        var $element = $(this);
        setTimeout( function () {
        if( checkIfPresent( $element )) {
            $element.attr('class').split(/\s+/).forEach(function (className) {
                $element.animate(animations[className], 400);
            });
        }
        }, k*speed);
    });

});


//menu start//

$(window).scroll(function () {
      if ($(window).scrollTop() === 0) {
        $('#menubar').removeClass('scrolled');
    } else {
        $('#menubar').addClass('scrolled');
    }
});

// Cache selectors
var lastId,
    topMenu = $("#mnav"),
    topMenuHeight = topMenu.outerHeight()+50,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
});

//menu end//


// ************** katban - obsluga klikacza w zajawca *******************
$(document).ready(function () {
    $('.btnzaj').click(function () {
        $('.form').show();
    });
    //
    $('.form').click(function (event) {
        event.stopPropagation();
        $(this).hide();
    });
    $('#cntform').click(function (event) {
        event.stopPropagation()
    })
});

// *******************   parallax   *************************************

$(document).ready(function() {
    var fotoZajawka = document.getElementById('zajawka'), fotoTeam = document.getElementById('team');
    var parallaxfoto = [fotoZajawka, fotoTeam];

    parallaxfoto.forEach(function(foto) {
        $(window).scroll(function(event) {
            var offset = $(foto).offset().top + 90 - (window.innerHeight - foto.clientHeight) / 2;
            var scroll = $(window).scrollTop();
            foto.style.backgroundPositionY = ((scroll - offset) / 4) + 'px';
        })
    })
});
// *****************koniec - parallax ***********************************

// game

    function changePosition (visitCard) {
        var positionTop = (Math.random() * 400);
        var positionLeft = (Math.random() * 400);
        $(visitCard).css({top: positionTop, left: positionLeft});
    }

    (function() {
    
        $('.visitCard')
            .click(function() {
                var currentCardId = $(this).attr('id');
                var nextCard = config.vCards[currentCardId].nextVCard;

                $(this).find('.photo').css({backgroundImage: 'url(' + nextCard.photo +')'});
                $(this).find('.vCardInput').text(nextCard.text);
                $(this).css({opacity: 1});
                $(this).attr('id', nextCard.name);
                changePosition(this);
            })
            .click(function () {

                if ($(this).attr('id') != 'vCard10') {
                    $(this)
                        .addClass('animatedCard')
                        .animate({
                            opacity: 0.25
                        }, 20000, function () {
                            $(this).removeClass('animatedCard')
                        });
                } else {
                    $(this).removeClass('animatedCard');
                    $(this).removeClass('bigLetter');
                    $(this).animate({
                        height: 600,
                        width: 900,
                        opacity: 0
                    }, 15000, function () {
                        console.log('puff');
                        $(this).css({display: null})
                    });
                    $(this).find('.photo').animate({
                        height: 360,
                        width: 360,
                        opacity: 0
                    }, 15000, function () {
                        console.log('photo puff')
                    });
                    $(this).find('.vCardInput').animate({
                        height: 550,
                        width: 800,
                        fontSize: 82,
                        opacity: 0
                    }, 15000, function () {
                        console.log('text puff')
                    });
                }
            });
    }());

    showFirstVCard = function () {
    
        $('.functionalitiesIcon').click(function () {
            var $vCardId = "#vCard1";

           switch ($(this).attr('id')) {
               case "coreFunction1":
                   $($vCardId).find('.vCardInput').text(config.vCards.vCard1.text1);
                   break;
               case "coreFunction2":
                   $($vCardId).find('.vCardInput').text(config.vCards.vCard1.text2);
                   break;
               default:
                   $($vCardId).find('.vCardInput').text(config.vCards.vCard1.text3);
               }
                   $($vCardId).find('.photo').css({backgroundImage: 'url(' + config.vCards.vCard1.photo + ')'});
                   changePosition($vCardId);
                   $($vCardId).addClass('animatedCard').show().animate({
                       opacity: 0.25
                   }, 20000, function () {
                       $($vCardId).removeClass('animatedCard');
                   });
                   $('.functionalitiesIcon').off('click');
           });
        }();


    hoverOnAVCard = function () {

        $('.animatedCard').hover(function () {

            if ($(this).attr('id') != 'vCard10') {
                $(this)
                    .stop(true, false)
                    .css({
                        height: 220,
                        width: 330,
                        opacity: 1
                    });
            } else {
                return console.log ('hover in')
            }
        }, function () {

            if ($(this).attr('id') != 'vCard10') {
                $(this)
                    .css({
                        height: 200,
                        width: 300,
                        opacity: 0.7
                    })
                    .animate({
                        opacity: 0.25
                    }, 2000, function () {
                        $(this).removeClass('animatedCard')
                    })
            } else {
                return console.log('hover out')
            }
        })
        }();
