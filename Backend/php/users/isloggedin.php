<?php
include '../conn.php';
session_name('users');
session_start();
if (isset($_SESSION['isloggedin']) && $_SESSION['isloggedin'] == 'true') {
    header('Content-Type: application/json');
    echo json_encode([
        'userloggedin' => true,
        'id' => $_SESSION['id'],
        'email' => $_SESSION['email'],
        'name' => $_SESSION['name'],
    ]);
    exit();
} else {
    header('Content-Type: application/json');
    echo json_encode([
        'userloggedin' => false,
    ]);
    exit();
}
