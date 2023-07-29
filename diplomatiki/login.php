<?php
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') == 0) {
    $conn = mysqli_connect("localhost", "root","") or die("Could not connect: " .
mysqli_error($conn));
mysqli_select_db($conn , "diplomatiki") or die ("db will not open" . mysqli_error($conn));
$query = "SELECT username,password,teacher FROM user" ;
$result = mysqli_query($conn, $query) or die("Invalid query");

$num = mysqli_num_rows($result);
for($i=0; $i<$num; $i++) {
$row = mysqli_fetch_row($result);
//echo $row[0] . " " . $row[1] . " " . $row[2] . " " . $row[3] . " ". "<br/>";
$myObj->username[$i] = $row[0];
			$myObj->password[$i] = $row[1];
			$myObj->teacher[$i] = $row[2];
}
$json=json_encode($myObj);

			echo $json;
mysqli_close($conn);
}
?>
