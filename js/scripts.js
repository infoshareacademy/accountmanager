function validateForm(e){
    e.preventDefault();
    var imie = document.getElementById('Imie');
    var email = document.getElementById('Email');

    function validateEmail(em) {
        var re = /\S+@\S+\.\S+/;
        return re.test(em);
    }

    if(!imie.value.trim() || imie.value == "Name..." || imie.value == "pole jest wymagane!"){
        imie.value = 'Pole jest wymagane!';
    } else {
        //imie.value = "Gratulujemy udało się";
        imie.validated = true;
    }

    if(!email.value.trim() || email.value == "E-mail..." || email.value == "pole jest wymagane!"){
        email.value = 'Pole jest wymagane!';
    } else if(!validateEmail(email.value)){
        email.value = 'Nieprawidłowy adres e-mail...';
    } else {
        email.validated = true;
    }

    if (email.validated && imie.validated){
        document.getElementById('cntform').innerHTML = "<p>Dziękujęmy<br> Wkrótce się z Państwem skonaktujemy</p>";
    }

}
document.getElementById('submit-btn').addEventListener('click', validateForm);

function clearText(field){
    if(field.defaultValue == field.value){
        field.value = "";
    }
    else if(field.value == ""){
        field.value = field.defaultValue;
    }
}
document.getElementById('Imie').addEventListener('blur', function(e){ clearText(e.target); });
document.getElementById('Email').addEventListener('blur', function(e){ clearText(e.target); });
document.getElementById('Imie').addEventListener('focus', function(e){ clearText(e.target); });
document.getElementById('Email').addEventListener('focus', function(e){ clearText(e.target); });



function setAsClicked (a) {
    var links = document.getElementsByClassName("menulink");
    for (var i = 0; i < links.length; i++) {
        links[i].className = "menulink";
            }
    a.className += " clicked";
}

