<?php
include '../conn.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $full_name = mysqli_escape_string($conn, $_POST['full_name']);
    $email = mysqli_escape_string($conn, $_POST['email']);
    $password = mysqli_escape_string($conn, $_POST['password']);
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        echo json_encode([
            'status' => 'error',
            'message' => 'User already exist with same email',
        ]);
    } else {
        $query = "INSERT INTO users (full_name, email, password) VALUES ('$full_name', '$email', '$hashed_password')";
        $result = mysqli_query($conn, $query);
        if ($result) {
            session_destroy();
            echo json_encode([
                'status' => 'success',
                'message' => 'User added sucessfully',
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'User not added',
            ]);
        }
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Access Denied!!!',
    ]);
}
mysqli_close($conn);
