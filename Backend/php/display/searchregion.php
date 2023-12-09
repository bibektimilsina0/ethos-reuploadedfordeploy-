<?php
//not recently used this file
include '../conn.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $searchregion = mysqli_escape_string($conn, $_POST['searchregion']);
    $query = "SELECT * FROM region WHERE region_name LIKE '%$searchregion%'";

    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $response = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response);
        exit();
    } else {
        echo "0 results";
    }
    mysqli_close($conn);
} else {
    echo json_encode([
        'status' => 404,
        'message' => 'Invalid Request'
    ]);
}
