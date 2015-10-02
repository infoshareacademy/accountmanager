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


// game

var $vCardInputContainer = $('.vCardInput');

//$vCardInputContainer.text('dodatkowy tekst');

function changePosition (visitCard) {
        var positionTop = (Math.random() * 500);
        var positionLeft = (Math.random() * 200);
        $(visitCard).css({top: positionTop, left: positionLeft});
    }

(function() {

    $('.visitCard').click(function() {
        var currentCardId = $(this).attr('id');
        var nextCard = config.vCards[currentCardId].nextVCard;

        $(this).find('.photo').css({backgroundImage: 'url(' + nextCard.photo +')'});
        $(this).find('.vCardInput').text(nextCard.text);
        $(this).attr('id', nextCard.name);
        changePosition(this);
        $(this).animate({
            opacity: 0.25
        },15000, function () {
            $(this).removeClass('animatedCard')
        });
    });

}());

showFirstVCard = (function () {

    $('.functionalitiesIcon').click(function () {
        var $vCardId = "config.vCards.vCard1";

        $('#vCard1').find('.photo').css({backgroundImage: 'url(' + $vCardId.photo +')'});
        $('#vCard1').find('.vCardInput').text($vCard1.text);
        $(this).attr('id', nextCard.name);
        changePosition('#vCard1');
        $('#vCard1').show().animate({
            opacity: 0.25
        },20000, function () {
            $('#vCard1').removeClass('animatedCard');
        });
        $('.functionalitiesIcon').off('click');
    });

}());