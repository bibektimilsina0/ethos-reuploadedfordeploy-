<?php
include '../conn.php';

$query = "SELECT * FROM region";
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
