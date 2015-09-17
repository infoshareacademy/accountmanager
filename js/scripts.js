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
            imie.parent().find('.err').html('Pole jest wymagane!');
            imie.addClass('err-inp');
        } else {
            imie.validated = true;
        }

        if (!validateEmail(email.val())) {
            email.parent().find('.err').show();
            email.parent().find('.err').html('Nieprawidłowy adres e-mail...');
            email.addClass('err-inp');
        } else {
            email.validated = true;
        }

        if (email.validated && imie.validated) {
           $('#cntform').html("<h3>Dziękujęmy za zaufannie</h3> <p>Wkrótce się z Państwem skonaktujemy</p>");
        }


        $("input").focus(function() {
            $( this ).parent().find('.err').fadeOut( 100 );
            $( this ).removeClass('err-inp');
        });
    }); // Walidacja formularza




});


//menu start//

function setAsClicked (a) {
    console.log('set as clicked runed!!');
    var links = document.getElementsByClassName("menulink");
    for (var i = 0; i < links.length; i++) {
        links[i].className = "menulink";
            }
    a.className += " clicked";
}
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
})
//***********************************************************************



// koniec menu
