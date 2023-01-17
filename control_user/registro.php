<?php
include "../base/database.php";

if ( !empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confPassword']) ) {
    $name         = $_POST['name'];
    $email        = $_POST['email'];
    $password     = $_POST['password'];

    $sql      = "INSERT INTO registro (name, email, password)
    VALUES ('$name', '$email', '$password')";

    $resul    = mysqli_query($conexion, $sql) or trigger_error("Query Faild SQL - ERROR: ".mysqli_error($conectar), E_USER_ERROR);

    header("location: index_Account.php");
}
?>