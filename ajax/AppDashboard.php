<?php 

//include database connection file
require_once '../includes/config.php';
//define database object
global $dbc;

//$stmt = $dbc->prepare("SELECT * FROM `WAGF_Login` ;SELECT * FROM `WAGF_Groups` ;" );
$stmt  = $dbc->prepare("SELECT * FROM `WAGF_Login` where id = '".$_POST['tokenId']."';");

$stmt  = $dbc->prepare("SELECT * FROM `WAGF_Login` LEFT JOIN `WAGF_Groups`  ON WAGF_Login.id = WAGF_Groups.login_id  JOIN `WAGF_GroupAuditSummary` on WAGF_Groups.login_id = WAGF_GroupAuditSummary.login_id AND WAGF_Groups.id= WAGF_GroupAuditSummary.group_id
 WHERE WAGF_Login.id= '".$_POST['tokenId']."';");

//$stmt .= $dbc->prepare("SELECT * FROM `WAGF_Groups` where login_id = '".$_POST['tokenId']."';");
//$stmt .= $dbc->prepare("SELECT * FROM `WAGF_GroupAudit` where group_id in (SELECT id FROM `WAGF_Groups` where login_id = '".$_POST['tokenId']."');");
 
$stmt->execute();
 
$rowCountNum = $stmt->rowCount();
//echo $row[0]; // 42 for select email , name from table
//echo $row[1]; // the email value
 
if ($rowCountNum > 0){  
     $rowSet = $stmt->fetchAll();
  //  echo 'correct';
    echo json_encode($rowSet);// $rowSet;
  //  echo json_encode($tokenIdToVisit);
} else{ 
    echo 'wrong';
}

 
?>