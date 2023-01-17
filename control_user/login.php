<?php
session_start();
include "../base/database.php";

if ( !empty($_POST['name']) && !empty($_POST['password']) ) {
    $name         = $_POST['name'];
    $password     = $_POST['password'];

    $sql = $conexion -> query(" SELECT * FROM registro WHERE name='$name' and password='$password' ");
    if ( $datos=$sql -> fetch_object() ){
        $_SESSION["name"]     = $datos->name;
        $_SESSION["email"]    = $datos->email;
        $_SESSION["password"] = $datos->password;

        header("location: ../index_Account.php");
    }
    else {
        header("location: ../index_Login.php");
    }
}

?>