function validateForm(e){
    e.preventDefault();
    var imie = document.getElementById('Imie');
    var email = document.getElementById('Email');

    if(!imie.value.trim()){
        imie.value = 'pole jest wymagane!';
    } else {

    }

    if(!email.value.trim()){
        email.value = 'pole jest wymagane!';
    } else {

    }

    console.log(imie + ' ' + email);
}
document.getElementById('submit-btn').addEventListener('click', validateForm);

function setAsClicked (a) {
    var links = document.getElementsByClassName("menulink");
    for (var i = 0; i < links.length; i++) {
        links[i].className = "menulink";
            }
    a.className += " clicked";
}
