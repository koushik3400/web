<?php

$conn = mysqli_connect('localhost','root','','koushik');

$sql = "select * from bmi";

$dbconnect = mysqli_query($conn,$sql);

$array = mysqli_fetch_assoc($dbconnect);

echo $array['height'] ."<hr>".$array['weight'] ."<hr>".$array['age'];

?>