<?php 
	include "../connect.php";

	// полученные параметры вставляются в запрос на базу 
	$brand = $_POST["brand"];
	$model = $_POST["model"];
	$color = $_POST["color"];
	$volume = $_POST["volume"];
	$price = $_POST["price"];

	mysqli_query($link, "INSERT INTO `auto` (`id`, `brand`, `model`, `volume`, `price`, `color`) VALUES (NULL, '$brand', '$model', '$volume', '$price', '$color')");

	// назад на стартовую
	header("Location: ../index.php");

 ?>