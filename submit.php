<?php

$jsondata = $_POST['data'];


// the message
$msg = $jsondata;

// use wordwrap() if lines are longer than 70 characters
// $msg = wordwrap($msg,70);

// send email
mail("szuc7430@mylaurier.ca","JSON SERIALIZED ORDER",$msg);


echo $jsondata;


?>