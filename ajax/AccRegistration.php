<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['fullName'])){
        $fullName =  $mysqli->real_escape_string($_GET['fullName']);
        $email = $mysqli->real_escape_string($_GET['email']);
        $phoneNumber = $mysqli->real_escape_string($_GET['phoneNumber']);
        $password = $mysqli->real_escape_string($_GET['password']);
        $date = date_create();
        $id = 'Par'+date_timestamp_get($date);
		$status = "0";
		$created = date("Y-m-d", strtotime("now"));
  
 $query="INSERT INTO `WAGF_Login`('id',  `name`, `email`, `phone_no`, `password`, `registered_on`, `profile_image`) VALUES ('$id', '$fullName','$email','$phoneNumber','$password','$created','$status')";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$result = $mysqli->affected_rows;

	echo $json_response = json_encode($result);
	}
?>