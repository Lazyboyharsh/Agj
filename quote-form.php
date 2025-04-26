<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';             // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'notalazy865@gmail.com';         // Your Gmail
        $mail->Password = 'xkdb szsa panh oepx';      // Use App Password (not your normal password)
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('your@gmail.com', 'AGJ Website');
        $mail->addAddress('your@gmail.com');         // Where the form sends to

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'New Quote Request';

        $body = "Name: {$_POST['name']}\n";
        $body .= "Email: {$_POST['email']}\n";
        $body .= "Phone: {$_POST['phone']}\n";
        $body .= "Service: {$_POST['service']}\n";
        $body .= "Message:\n{$_POST['message']}";

        $mail->Body = $body;

        $mail->send();
        echo "<script>alert('Quote request sent successfully!');window.history.back();</script>";
    } catch (Exception $e) {
        echo "<script>alert('Error sending email: {$mail->ErrorInfo}');window.history.back();</script>";
    }
}
?>
