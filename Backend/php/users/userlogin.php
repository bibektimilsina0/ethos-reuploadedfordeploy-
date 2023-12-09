<?php
include '../conn.php';
session_name('users');
session_start();

//post methods email and password and set session variable isloggedin,id,name,email

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row['password'])) {
            $_SESSION['isloggedin'] = 'true';
            $_SESSION['id'] = $row['id'];
            $_SESSION['name'] = $row['full_name'];
            $_SESSION['email'] = $row['email'];
            header('content-type:application/json');
            echo json_encode([
                'status' => 'success',
                'message' => 'Logged in successfully',
                'id' => $row['id'],
                'name' => $row['full_name'],
                'email' => $row['email'],
            ]);
        } else {
            header('content-type:application/json');
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid password',
            ]);
        }
    } else {
        header('content-type:application/json');
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid email',
        ]);
    }
} else {
    header('content-type:application/json');
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method',
    ]);
}
mysqli_close($conn);
