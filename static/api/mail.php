<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "http://bhwni.satlaa.com" || $http_origin == "http://bhawaniind.com" || $http_origin == "http://bhawaniind.com")
{  
    header("Access-Control-Allow-Origin: $http_origin");
}


header("Access-Control-Allow-Headers: Content-Type, origin");
$_POST = json_decode(file_get_contents("php://input"),true);
$name = "";
$email = "";
$message = "";
if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['email'])) {
    $email = $_POST['email'];
}
if (isset($_POST['msgContent'])) {
    $message = $_POST['msgContent'];
}

$to      = 'info@bhawaniind.com';
$subject = 'Sender Name is ' . $name.' and Email Address is '.$email;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo "Suc";
