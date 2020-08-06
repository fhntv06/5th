<?php
	include "../connect.php";

	$search_get = $_GET['search'];
	$sql = "SELECT * FROM `auto` WHERE `brand` LIKE '%$search_get%' OR `model` LIKE '%$search_get%' ";
	$query = mysqli_query($link, $sql);
 ?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Список автомобилей</title>
    <link rel="stylesheet" type="text/css" href="/style.css">
</head>
<body>
     <div class="main">
        <h1>Список автомобилей</h1>
        <h2>Автомобили</h2>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Марка</th>
                        <th>Модель</th>
                        <th>Цвет</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody id="tbody">
					<?php
					// делается поиск по полученному массиву и выводится по каждому индексу
						$select_while = mysqli_fetch_all($query);
						foreach($select_while as $i){
					?>
						 	<tr>
					        <td><?= $i[0] ?></td>
					        <td><?= $i[1] ?></td>
					        <td><?= $i[2] ?></td>
					        <td><?= $i[5] ?></td>
					        <td><?= $i[3] ?></td>
					        <td><?= $i[4] ?></td>
					        <td>
					            <a href="../edit-form.php?id=<?= $i[0]?>">
					                <img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" title="Редактировать" />
					            </a>
					        </td>
					        <td>
					            <a href="../delete-form.php?id=<?= $i[0]?>">
					                <img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' title="delete" />
					            </a>
					        </td>
					    </tr>
					<?php 
						}
					?>
					</tbody>
            </table>
        </div>

        <a href="/">
        	<button class="button__blue">На главную</button>
        </a>

</body>
</html>