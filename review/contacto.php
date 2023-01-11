<?php
include "../base/database.php";

$nombre    = $_POST['name'];
$email     = $_POST['email'];
$phone     = $_POST['tel'];
$category  = $_POST['need'];
$message   = $_POST['message'];

$sql      = "INSERT INTO ContactUs (name, email, tel, category, message)
VALUES ('$nombre', '$email', $phone ,'$category', '$message')";

$resul    = mysqli_query($conexion, $sql) or trigger_error("Query Faild SQL - ERROR: ".mysqli_error($conectar), E_USER_ERROR);
?>