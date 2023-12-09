<?php

include '../conn.php';

$filtercategory = $_GET['filtercategory_id'];
$query = "SELECT place.*, region.region_name,region.region_weather, users.full_name, category.category_name 
FROM place
INNER JOIN region ON place.region_id = region.id 
INNER JOIN users ON place.user_id = users.id 
INNER JOIN category ON place.category_id = category.id 
WHERE category.id = '$filtercategory' 
ORDER BY place_name ASC";
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
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'error',
        'message' => 'No data found'
    ]);
    exit();
}
