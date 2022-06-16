<?php 

$conn = mysqli_connect('localhost','root','','vasu');

$var1 = $_POST['height'];
$var2 = $_POST['weight'];
$var3 = $_POST['age'];

$query = "insert into bmi(height,weight,age) values($var1,$var2,$var3)";

$x = mysqli_query($conn,$query); 

if($x)
{
    echo ('Sucessful');
}

 
?>