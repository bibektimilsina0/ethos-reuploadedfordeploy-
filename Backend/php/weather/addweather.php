<?php
include '../conn.php';

$apiKey = '1fec6e880cb96f4a30659a07fd2b12cd';

$query = "SELECT * FROM region ";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $placeName = $row['region_name'];

        // Construct the API URL with the appropriate endpoint and parameters
        $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" . urlencode($placeName) . "&appid=" . $apiKey;

        // Send the HTTP request to the API endpoint
        // Use the appropriate HTTP client library or function
        // For example, using cURL:
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $apiUrl);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);

        // Handle the API response (e.g., parse JSON, extract weather data)
        // You can then process the weather data or return it as needed
        // Handle the $response variable according to the OpenWeatherMap API response format

        //if city not found then it will return 404 error else echo the weather data
        if ($response === false) {
            $response = curl_error($curl);
            $query3 = "UPDATE region SET region_weather = '' WHERE region_name = '$placeName'";
            $result3 = mysqli_query($conn, $query3);
        } else {
            $decoded = json_decode($response, true);
            if (isset($decoded['cod']) && $decoded['cod'] === '404') {
                $response = 'City not found';
                $query0 = "UPDATE region SET region_weather = '' WHERE region_name = '$placeName'";
                $result0 = mysqli_query($conn, $query0);
            } else {
                $response = $decoded;
                $jsonData = json_encode($response); // Convert the array to a JSON string

                echo "Data found";

                $query2 = "UPDATE region SET region_weather = '$jsonData' WHERE region_name = '$placeName'";
                $result2 = mysqli_query($conn, $query2);
            }
        }
    }
}
