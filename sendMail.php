<?php 

    if(isset($_POST['send'])){
        $email=$_POST['email'];
        $to=$email;
        $subject="Subcription";
        $message="Hello! Thank you for subcribing us!";

        echo $message;
    }

?>