<?php 

 
//include database connection file
require_once '../includes/config.php';
//define database object
global $dbc;
 
$stmt = $dbc->prepare("SELECT id from WAGF_Login WHERE
email='".$_POST['username']."' && password='".$_POST['password']."'");
 
$stmt->execute();
 
$rowCountNum = $stmt->rowCount();
//echo $row[0]; // 42 for select email , name from table
//echo $row[1]; // the email value
 
if ($rowCountNum > 0){  
     $rowSet = $stmt->fetchAll();
   // echo 'correct';
    echo json_encode($rowSet);// $rowSet;
} else{ 
    echo 'wrong';
}
 
?>