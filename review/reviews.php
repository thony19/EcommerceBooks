<?php
include "../base/database.php";

$name      = $_POST['name'];
$email     = $_POST['email'];
$message   = $_POST['message'];

$sql      = "INSERT INTO reviews (name, email, message)
VALUES ('$name', '$email','$message')";


$resul    = mysqli_query($conexion, $sql) or trigger_error("Query Faild SQL - ERROR: ".mysqli_error($conexion), E_USER_ERROR);

header("location: ../index.php");
?>