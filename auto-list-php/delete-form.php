<?php 
	
	include "connect.php";

  // получен id, который передавали  
	$auto_id = $_GET["id"];
	$auto = mysqli_query($link, "SELECT * FROM `auto` WHERE `id` = '$auto_id'");
	$auto = mysqli_fetch_assoc($auto);

 ?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
	<title>Удаление строки</title>
  <link rel="stylesheet" type="text/css" href="/style.css">
</head>
<body>
	<!-- окно Удаления -->
    <div class="modal modal__delete">
        <div class="modal__content">
            <h2 class="modal__heading">Удалить строку?</h2>
            <div class="modal__button-group">
              <!-- удаляем по полученному id товар и возвращаемся на index -->
            	<a href="config/delete-script.php?id=<?= $auto['id']  ?>" >
                	<button type="submit" class="modal__button button__blue">Да!</button>
           		</a>
       			<a href="index.php">
       				<button class="modal__button button__blue" >Нет</button>
				</a>
            </div>
        </div>
    </div>

</body>
</html>