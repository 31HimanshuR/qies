<?php

// DATABASE CONNECTION
$conn = new mysqli("localhost", "root", "", "qies_contact");

// CHECK CONNECTION
if ($conn->connect_error) {
    die("Connection failed");
}

// GET DATA FROM FORM
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);

// INSERT INTO DATABASE
$sql = "INSERT INTO contact_messages (name, email, phone, message)
        VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {

    // SEND EMAIL
    $to = "himanshuraghavo29@gmail.com";
    $subject = "New Contact Form Message";
    $txt = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";

    mail($to, $subject, $txt, $headers);

    echo "success";

} else {
    echo "error";
}

$conn->close();

?>