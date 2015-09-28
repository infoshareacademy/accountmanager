$(document).ready(function() {

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
    var windowHeight = $(window).height();
    var presentWindowPosition = 0;
    var elementsToAnimate = $('.animate');
    $('.animate').hide();

    function checkIfPresent(element){
        presentWindowPosition = $(window).scrollTop();
        var divPosition = element.offset().top;
        console.log('element ' + element + (divPosition < (presentWindowPosition + windowHeight)));
        return (divPosition < (presentWindowPosition + windowHeight));
    }

    function animateElement(elem){
        elem.fadeIn(2000);
    }

    $(window).scroll(function() {
        for (var i = 0; i < elementsToAnimate.length; i++) {
            if(checkIfPresent($(elementsToAnimate[i]))){
               // animateElement($(elementsToAnimate[i]));
               // console.log($(elementsToAnimate[i]));
                $(elementsToAnimate[i]).fadeIn(2000);
                //elementsToAnimate.splice(i, 1);
            }
        }

    })


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
