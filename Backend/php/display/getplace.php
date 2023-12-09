<?php
include '../conn.php';
$query = "SELECT place.*, region.region_name,region.region_weather, users.full_name, category.category_name 
          FROM place 
          INNER JOIN region ON place.region_id = region.id 
          INNER JOIN users ON place.user_id = users.id 
          INNER JOIN category ON place.category_id = category.id 
          ORDER BY place_name ASC";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    $places = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $filename = unserialize($row['place_photo']);
        $row['place_photo'] = $filename;
        $places[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($places);
} else {
    header("content-type: application/json");
    echo json_encode(
        [
            'status' => 'error',
            'message' => 'No data found'
        ]
    );
}
