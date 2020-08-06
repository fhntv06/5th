<?php 

	include "../connect.php";

	// получили измененые данные, которые в запросе отвправляем на базу, где по id = $id будут изменены данные 
	$id = $_POST["id"];

	$brand = $_POST["brand"];
	$model = $_POST["model"];
	$color = $_POST["color"];
	$volume = $_POST["volume"];
	$price = $_POST["price"];

	mysqli_query($link, "UPDATE `auto` SET `brand` = '$brand', `model` = '$model', `volume` = '$volume', `price` = '$price', `color` = '$color' WHERE `auto`.`id` = '$id'");

	
	// возвращаемся на стартовую
	header("Location: ../index.php");
 ?>