<?php
$servername = 'sql.infoshareaca.nazwa.pl';
$username = 'infoshareaca_1';
$password = 'iSAf0r3v3r';
$dbname = 'infoshareaca_1';

if(sizeof($_POST)>0){
    $conn = mysqli_connect($servername, $username, $password, $dbname, 3307);
    if(!$conn){
        die("Connection failed: ". mysqli_connect_error());
    }
    $name =  (string)addslashes($_POST['imie']);
    $email =  (string)addslashes($_POST['email']);
    $date = date("Y-m-d");

    // id, name, email, date, lang
    $sql = "INSERT INTO users SET name='".$name."', email='".$email."', date='".$date."', lang='".$lang."'";
    // echo $sql;exit;
    $result = mysqli_query($conn, $sql);
}
?>