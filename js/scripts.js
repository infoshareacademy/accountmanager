function validateForm(e){
    e.preventDefault();
    var imie = document.getElementById('Imie');
    var email = document.getElementById('Email');

    function validateEmail(em) {
        var re = /\S+@\S+\.\S+/;
        return re.test(em);
    }

    if(!imie.value.trim() || imie.value == "pole jest wymagane!"){
        imie.value = 'Pole jest wymagane!';
    } else {
        imie.validated = true;
    }

    if(!validateEmail(email.value)){
        email.value = 'Nieprawidłowy adres e-mail...';
    } else {
        email.validated = true;
    }

    if (email.validated && imie.validated){
        document.getElementById('cntform').innerHTML = "<p>Dziękujęmy<br> Wkrótce się z Państwem skonaktujemy</p>";
    }

}  // Walidacja formularza

document.getElementById('submit-btn').addEventListener('click', validateForm);


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