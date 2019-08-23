<?php 
$password = $_POST["password"];
if ($password=="11111"){
    header( "Location: select.php" ) ;
}else{
    header( "Location: pass.php" ) ;
}

?>