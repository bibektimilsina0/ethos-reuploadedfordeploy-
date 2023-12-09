<?php
include '../conn.php';


$searchplace = mysqli_escape_string($conn, $_GET['searchplace']);
$query = "SELECT place.*, region.region_name FROM place INNER JOIN region ON place.region_id = region.id WHERE place_name LIKE '%$searchplace%' ORDER BY place_name ASC";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $response = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $filename = unserialize($row['place_photo']);
        $row['place_photo'] = $filename;
        $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
} else {
    echo "0 results";
}
