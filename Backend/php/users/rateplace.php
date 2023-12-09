<?php
include '../conn.php';
session_start();
if (isset($_SESSION['isloggedin']) && $_SESSION['isloggedin'] == 'true') {
    $user_id = $_SESSION['id'];
    $place_id = $_POST['place_id'];
    

} else {
    header('content-type:application/json');
    echo json_encode([
        'status' => 'error',
        'message' => 'User not logged in',
    ]);
}
