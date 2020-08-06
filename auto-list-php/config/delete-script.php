<?php 

	include "../connect.php";

	// отправляем запрос на удаление записи с id = $id 
	$id = $_GET["id"];

	mysqli_query($link, "DELETE FROM `auto` WHERE `auto`.`id` = '$id' ");

	
	// возвращаемся на стартовую
	header("Location: ../index.php");

 ?>