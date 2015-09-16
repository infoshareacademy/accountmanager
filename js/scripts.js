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

    }

    if(!email.value.trim() || email.value == "E-mail..." || email.value == "pole jest wymagane!"){
        email.value = 'Pole jest wymagane!';
    } else if(!validateEmail(email.value)){
        email.value = 'Nieprawidłowy adres e-mail...';
    } else {
        email.value = "Gratulujemy udało się";
        console.log(email.value);
    }
}
document.getElementById('submit-btn').addEventListener('click', validateForm);

