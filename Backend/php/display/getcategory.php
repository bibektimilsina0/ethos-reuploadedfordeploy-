<?php
include '../conn.php';

$query = "SELECT * FROM category";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $categories = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $categories[] = $row;
    }
    header('content-type: application/json');
    echo json_encode($categories);
    exit();
} else {
    echo json_encode([
        'status' => 404,
        'message' => 'No data found'
    ]);
    mysqli_close($conn);
    exit();
}
