<?php 
	

	// подключаемся к phpMyAdmin
	$host = "localhost";
	$user = "root";
	$password = "root";
	$database = "dbauto";

	$link = mysqli_connect($host, $user, $password, $database);

	mysqli_query($link, "SET NAME 'utf8'");
	
 ?>