<?php 
    include "connect.php";

    // по-умолчанию первая страница
    // проверяем на то, есть ли 
    if(isset($_GET["page"])){
        // получаем на какой странице
        $page = $_GET["page"];
    }else{
        $page = 1;
    }
    
    // кол-во выводин на страницу
    $notesOnPage = 5;
    // уравнение для вывода нужного количества
    $from = ($page - 1) * $notesOnPage;

    // функция сортировки
    $sorting = $_GET["sort"];

    switch($sorting){
        case "price-asc"; $sorting = "price ASC";
        break;

        case "price-desc"; $sorting = "price DESC";
        break;

        case "volume-asc"; $sorting = "volume ASC";
        break;

        case "volume-desc"; $sorting = "volume DESC";
        break;

        // проверка на ввод
        default; 
        $sorting = false;
        break;
    }

    if($sorting){
        $query = "SELECT * FROM auto WHERE id > 0 ORDER BY $sorting ";
    }else{
        $query = "SELECT * FROM auto WHERE id > 0 LIMIT $from, $notesOnPage";
    }

   

    // запрос на получение с какого, сколько записей
    $result = mysqli_query($link, $query);
    $row = mysqli_fetch_all($result);

 ?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Список автомобилей</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <div class="main">
        <h1>Список автомобилей</h1>
        <form class="search__form" method="get" action="config/search.php">
            <input type="text" name="search" id="search__input" placeholder="Марка / Модель">
            <button type="submit" class="search__button" id="search__button">
                <span>Найти&#128270;</span>
            </button>
        </form>
        <h2>Добавить запись</h2>
        <p style="text-align: right; color: #757575; font-size: 12px;">* обязательное поле</p>
        <div class="container">
            <form action="config/add.php" method="post">
                <input class="container__input" type="text" placeholder="Введите марку *" maxlength="10" name="brand">
                <input class="container__input" type="text" placeholder="Введите модель *" maxlength="10" name="model">
                <input class="container__input" type="text" placeholder="Введите цвет *" maxlength="30" name="color">
                <input class="container__input" type="text" placeholder="Введите количество *" maxlength="5" onKeyPress ="if ((event.keyCode < 48) || (event.keyCode > 57)){alert('Не понятно, что цифры надо вводить(без побелов)?');}" name="volume">
                <input class="container__input" type="text" placeholder="Введите цену *" maxlength="9" onKeyPress ="if ((event.keyCode < 48) || (event.keyCode > 57)){alert('Не понятно, что цифры надо вводить(без побелов)?');}" name="price">
                <button type="submit" id="container__button__add" class="button__blue">Добавить</button>
            </form>
        </div>
        <h2>Сортировка</h2>
        <div class="container">
            <div class="select">
                <button class="button__content">
                    <span class="button__text">
                        <span>Марка</span>
                    </span> 
                    <span>&#8595;</span>    
                </button>
                <div class="select__items select__brand">
                    <?php 
                        // перебор элементов brand и вывод
                        $before = "";
                        foreach($row as $i){
                            
                            if($before != $i[1]){
                    ?>
                        <div class="select__item">
                            <span><?= $i[1] ?></span>
                        </div>

                        <?php     
                                $before = $i[1];
                            }
                        }
                    ?>
                </div>
            </div>
            
            <div class="select disabel">
                <button class="button__content">
                    <span class="button__text">
                        <span>Модель</span>
                    </span>     
                    <span>&#8595;</span>
                </button>
                <div class="select__items select__model">
                     <?php 
                    // перебор элементов model и вывод
                        $before = "";
                        foreach($row as $i){
                            
                            if($before != $i[2]){
                    ?>
                        <div class="select__item">
                            <span><?= $i[2] ?></span>
                        </div>

                        <?php     
                                $before = $i[2];
                            }
                        }
                    ?>
                </div>
            </div>
            <div class="select">
                <button class="button__content">
                    <span class="button__text">
                        <span>Цвет</span>
                    </span> 
                    <span>&#8595;</span>    
                </button>
                 <div class="select__items select__color">
                     <?php 
                    // перебор элементов color и вывод
                        $before = "";
                        foreach($row as $i){
                            
                            if($before != $i[5]){
                    ?>
                        <div class="select__item">
                            <span><?= $i[5] ?></span>
                        </div>

                        <?php     
                                $before = $i[5];
                            }
                        }
                    ?>
                 </div>
            </div>
            <div class="select">
                <button class="button__content">
                    <span class="button__text">
                        <span>Количество</span>
                    </span> 
                    <span>&#8595;</span>    
                </button>
                <div class="select__items">
                    <div class="select__item" style="justify-content: space-between;">
                         <a href="index.php?sort=volume-asc">
                            <span>По возрастанию</span>
                        </a>
                        <span>&#8593;</span>  
                    </div>
                
                    <div class="select__item" style="justify-content: space-between;">
                        <a href="index.php?sort=volume-desc">
                            <span>По убыванию</span>
                        </a>  
                        <span>&#8595;</span> 
                    </div>
                </div>
            </div>
            <div class="select">
                <button class="button__content">
                    <span class="button__text">
                        <span>Цена</span>
                    </span>
                    <span>&#8595;</span>
                </button>
                <div class="select__items">
                    <div class="select__item" style="justify-content: space-between;">
                         <a href="index.php?sort=price-asc">
                            <span>По возрастанию</span>
                        </a>  
                        <span>&#8593;</span> 
                    </div>
                    
                    
                        <div class="select__item" style="justify-content: space-between;">
                            <a href="index.php?sort=price-desc">
                                <span>По убыванию</span>
                            </a>
                            <span>&#8595;</span>   
                        </div>
                    
                </div>
            </div>
        </div>
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
                    // перебор элементов и вывод
                    foreach($row as $i){
                ?>
                    <tr>
                        <td><?= $i[0] ?></td>
                        <td><?= $i[1] ?></td>
                        <td><?= $i[2] ?></td>
                        <td><?= $i[5] ?></td>
                        <td><?= $i[3] ?></td>
                        <td><?= $i[4] ?></td>
                        <td>
                            <a href="edit-form.php?id=<?= $i[0]?>">
                                <img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" title="Редактировать" />
                            </a>
                        </td>
                        <td>
                            <a href="delete-form.php?id=<?= $i[0]?>">
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

        <ul class="pagination">
            <?php  
                // пагинация 
                $query = "SELECT COUNT(*) as count FROM auto ";
                $result = mysqli_query($link, $query) or die(mysqli_error($link));
                $count = mysqli_fetch_assoc($result)["count"];
                $pageCount = ceil($count / $notesOnPage);
                // вывод округленного в большую сторону числа ссылок 
                for($i = 1; $i <= $pageCount; $i++){
            ?>
                <li>
                    <a href="?page=<?= $i ?>"><?= $i ?></a>
                </li>
            <?php  
                 }
            ?>
        </ul>

 </body>
 </html>