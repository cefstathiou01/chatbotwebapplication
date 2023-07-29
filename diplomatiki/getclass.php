<?php
    $conn = mysqli_connect("localhost", "root","") or die("Could not connect: " .
    mysqli_error($conn));
    mysqli_select_db($conn , "diplomatiki") or die ("db will not open" . mysqli_error($conn));
$conn -> set_charset("utf8");

if(isset($_SERVER["CONTENT_TYPE"])) {
	$contentType = $_SERVER["CONTENT_TYPE"];
	$contentType = explode("; ", $contentType)[0];
	}
	else{
	$contentType = "";
	}
    echo "ateeeeeeeeeee";
		if(strcasecmp($contentType, "application/json") == 0) {
			$j = trim(file_get_contents("php://input"));
			$d = json_decode($j);	
			$username = $d->username ;
            $query = "SELECT * FROM user AS U,class AS C,enroll AS E,quiz AS Q WHERE U.username= $username AND U.user_id=E.user_id AND  C.class_id=E.class_id  AND Q.class_name=C.class_name";
            $result = mysqli_query($conn, $query) or die("Invalid query");
            
            $num = mysqli_num_rows($result);
            for($i=0; $i<$num; $i++) {
            $row = mysqli_fetch_row($result);
            //echo $row[0] . " " . $row[1] . " " . $row[2] . " " . $row[3] . " ". "<br/>";
            $myObj->username[$i] = $row[0];
                        $myObj->user_id[$i] = $row[1];
                        $myObj->class_id[$i] = $row[2];
            }
            $json=json_encode($myObj);
             echo $json;
        }           
        
mysqli_close($conn);
