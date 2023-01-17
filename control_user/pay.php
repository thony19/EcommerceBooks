<?php
session_start();
include "../base/database.php";

$id_user = $_SESSION["name"];
$id_product ;

$sql      = "INSERT INTO Purchases (name, id_user, id_product)
VALUES ('$id_user','$id_product')";

$resul  = mysqli_query($conexion, $sql) or trigger_error("Query Faild SQL - ERROR: ".mysqli_error($conexion), E_USER_ERROR);

header("location: ../index_Account.php");
?>