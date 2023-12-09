<?php
include '../conn.php';
session_name('users');
session_start();

if (isset($_SESSION['isloggedin']) && $_SESSION['isloggedin'] == 'true') {
    if (isset($_SESSION['id']) && isset($_SESSION['email']) && isset($_SESSION['name'])) {
        $user_id = $_SESSION['id'];
        $user_email = $_SESSION['email'];
        $user_name = $_SESSION['name'];
        echo json_encode([
            'userloggedin' => true,
            'id' => $user_id,
            'email' => $user_email,
            'name' => $user_name,
        ]);
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $region_id = mysqli_escape_string($conn, $_POST['region_id']);
            $place_name = mysqli_escape_string($conn, $_POST['place_name']);
            $place_description = mysqli_escape_string($conn, $_POST['place_description']);
            $category_id = mysqli_escape_string($conn, $_POST['category_id']);
            $place_culture = mysqli_escape_string($conn, $_POST['place_culture']);
            $place_besttime = mysqli_escape_string($conn, $_POST['place_besttime']);
            $place_howtoreach =  mysqli_real_escape_string($conn, $_POST['place_howtoreach']);

            if (isset($_FILES['place_photo'])) {
                $fileNames = array();

                foreach ($_FILES['place_photo']['tmp_name'] as $key => $tmpName) {
                    $fileName = $_FILES['place_photo']['name'][$key];
                    $fileTmp = $_FILES['place_photo']['tmp_name'][$key];

                    move_uploaded_file($fileTmp, "../uploads/" . $fileName);

                    $fileNames[] = $fileName;
                }

                $serializedFileNames = serialize($fileNames);
            }
            $query = "INSERT INTO place (region_id,category_id,user_id,place_name, place_description, place_culture, place_photo, place_besttime, place_howtoreach) VALUES ('$region_id','$category_id','$user_id', '$place_name', '$place_description', '$place_culture', '$serializedFileNames', '$place_besttime', '$place_howtoreach')";
            $result = mysqli_query($conn, $query);
            if ($result) {
                echo json_encode([
                    'status' => 'success',
                    'message' => 'Place added sucessfully',
                ]);
            } else {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Place not added',
                ]);
            }
        }
    }
} else {

    header('Content-Type: application/json');
    echo json_encode([
        'userloggedin' => false,
    ]);
}
