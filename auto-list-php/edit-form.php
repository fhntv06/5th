<?php 
	
	include "connect.php";

	// поличили id
	$auto_id = $_GET["id"];
	$auto = mysqli_query($link, "SELECT * FROM `auto` WHERE `id` = '$auto_id'");
	$auto = mysqli_fetch_assoc($auto);

 ?>

 <!DOCTYPE html>
 <html lang="ru">
 <head>
 	<meta charset="utf-8">
 	<title>Редактирование записи</title>
 	<link rel="stylesheet" type="text/css" href="/style.css">
 </head>
 <body>
 	<!-- окно Редактирования -->
    <div class="modal modal__edit">
        <div class="modal__content modal__content__edit">
            <h2 class="modal__heading">Редактирование строки</h2>
            <div class="container">
            	<!-- отправляем измененные данные в базу   -->
            	<form action="config/edit-script.php" method="post">
            		<input  name="id" type="hidden" value="<?= $auto['id'] ?>">
	                <input class="container__input" type="text" placeholder="Введите марку *" maxlength="10" name="brand" value="<?= $auto['brand'] ?>">
	                <input class="container__input" type="text" placeholder="Введите модель *" maxlength="10" name="model" value="<?= $auto['model'] ?>">
	                <input class="container__input" type="text" placeholder="Введите цвет *" maxlength="30" name="color" value="<?= $auto['color'] ?>">
	                <input class="container__input" type="text" placeholder="Введите количество *" maxlength="5" onKeyPress ="if ((event.keyCode < 48) || (event.keyCode > 57)){alert('Не понятно, что цифры надо вводить(без побелов)?');}" name="volume" value="<?= $auto['volume'] ?>">
	                <input class="container__input" type="text" placeholder="Введите цену *" maxlength="9" onKeyPress ="if ((event.keyCode < 48) || (event.keyCode > 57)){alert('Не понятно, что цифры надо вводить(без побелов)?');}" name="price" value="<?= $auto['price'] ?>">
	                <div class="button__group">
	                    <button type="submit" class="button__blue edit__button">Редактировать</button>
	                    <a href="index.php">
	                    	<button id="button__close" class="button__blue">Отменить</button>
	                    </a>
	                </div>
                </form>
            </div>
        </div>
    </div>
 </body>
 </html>