<?php
    //trimitere de mail 
require_once('D:\Programe\PHPMAILER\PHPMailer_5.2.4\class.phpmailer.php');
$email=$_POST['email'];

    $mail = new PHPMailer();
    $mail->IsSMTP(); 

    $mail->SMTPDebug = 1; 
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'ssl'; 
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465; 
    $mail->IsHTML(true);
    $mail->Username = "ciupiciupa98@gmail.com";
    $mail->Password = "raca1234";
    $mail->SetFrom("ciupiciupa98@gmail.com");
    $mail->Subject = "Subscription";
    $mail->Body = "Thank you for your show of interest in us!";
    $mail->AddAddress($email);

//accesarea bazei de date
  if(!empty($email)){
    $host="localhost";
    $dbUsername="root";
    $dbPassword="";
    $dbname="subscribers";

 $conn = new mysqli($host,$dbUsername,$dbPassword,$dbname);

 if(mysqli_connect_error())
     die('Connect Error(' . mysqli_connect_errno().')'. mysqli_connect_error());
 
  else{
       $SELECT="SELECT email From emails Where email = ? Limit 1";
       $INSERT="INSERT Into emails (email) values(?)";
       
       $stmt=$conn->prepare($SELECT);
       $stmt->bind_param('s', $email);
       $stmt->execute();
       $stmt->bind_result($email);
       $stmt->store_result();
       $rnum=$stmt->num_rows;

       if($rnum==0){
           $stmt->close();

           $stmt=$conn->prepare($INSERT);
           $stmt->bind_param("s",$email);
           $stmt->execute();
           echo "New Subscriber!";
           if(!$mail->Send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
         } else {
            echo "Message has been sent";
         }
       }
       else {
           echo"Someone is already using this email!";
       }
       $stmt->close();
       $conn->close();
    }
}
else
     {echo("Please enter a valid e-mail address!");
     die();}
     
?>


