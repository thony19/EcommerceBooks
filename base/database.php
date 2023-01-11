<?php

$server   = 'localhost';
$username = 'root';
$password = '';
$database = 'Registro';

try {
    $conexion = new mysqli($server, $username, $password, $database);
    $conexion -> set_charset("utf8");
} catch (PDOException $e) {
    die('Connection Failed: ' . $e->getMessage());
}

?>