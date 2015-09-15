function validateForm(e){
    e.preventDefault();
    var imie = document.getElementById('Imie').value;
    var email = document.getElementById('Email').value;

    if(!imie || imie == " "){
        imie.value = 'pole jest wymagane!';
    }
    if(!email || email == " "){
        email.value = 'pole jest wymagane!';
    }
        console.log(imie + ' ' + email);
}
document.getElementById('submit-btn').addEventListener('click', validateForm);
