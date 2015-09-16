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

//menu  animacja po naciśnięciu

//$(document).ready(function() {
//    $('.menulink').click(function() {
//        setAsClicked(this);
//    })
//})

//var menuitems = document.getElementsByClassName('menulink');
//for (var i = 0; i < menuitems.length; i++) {
//    console.log(menuitems[i]);
//    menuitems[i].onclick = "setAsClicked(menuitems[i])";
//}

function setAsClicked (a) {
    console.log('set as clicked runed!!');
    var links = document.getElementsByClassName("menulink");
    for (var i = 0; i < links.length; i++) {
        links[i].className = "menulink";
            }
    a.className += " clicked";
}


// koniec menu