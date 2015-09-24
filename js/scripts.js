$(document).ready(function() {

    $('#submit-btn').click(function(event){

        event.preventDefault();
        var imie = $('#Imie');
        var email = $('#Email');

        function validateEmail(em) {
            var re = /\S+@\S+\.\S+/;
            return re.test(em);
        }

        if (!imie.val().trim()) {
            imie.parent().find('.err').show();
            imie.parent().find('.err').html('Come on, what\'s your name? :)');
            imie.addClass('err-inp');
        } else {
            imie.validated = true;
        }

        if (!validateEmail(email.val())) {
            email.parent().find('.err').show();
            email.parent().find('.err').html('Hm, this address seems incorrect. Please double check it');
            email.addClass('err-inp');
        } else {
            email.validated = true;
        }

        if (email.validated && imie.validated) {
            $('#contact-form').submit();
            $('#cntform').html("<h3>Thanks!</h3> <p>We will get in touch soon</p>");

        }


        $("input").focus(function() {
            $( this ).parent().find('.err').fadeOut( 100 );
            $( this ).removeClass('err-inp');
        });
    }); // Walidacja formularza




});



//menu start//

$(document).ready(function(){
    $('.menulink').click(function(){
        $('.menulink').removeClass('clicked');
        $(this).addClass('clicked');
    });
});
    //$('#mnav').mouseleave(function () {
    //    $('.menulink').removeClass('clicked');
    //});
    $(window).scroll(function() {
        if($(window).scrollTop() === 0){
            $('#menubar').removeClass('scrolled');
        } else {
            $('#menubar').addClass('scrolled');
        }
        //$('#menubar').addClass('scrolled');
        //if($(window).scrollTop == 0) {
        //    $('#menubar').removeClass('scrolled');
        //}
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
