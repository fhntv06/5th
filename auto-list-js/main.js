// search button
const searchButton = document.querySelector("#search__button");
const searchInput = document.querySelector("#search__input");
// кнопка сортировки
const sortButton = document.querySelector("#sort__button");
// выодающие меню
const selectСolor = document.querySelector(".select__color");
const selectBrand = document.querySelector(".select__brand");
const selectModel = document.querySelector(".select__model");
// кнопка добавления записи
const containerButtonAdd = document.querySelector("#container__button__add");
// pagination nav
const tbody = document.querySelector("tbody");
const pagination = document.querySelector(".pagination");
// поля ввода
const inputs = document.querySelectorAll(".container__input");
// modal
const modal = document.querySelector(".modal");
const editButton = document.querySelector(".edit__button");
let dataImg = 0;
// массив объектов 
let auto = [
	{
		id: 0,
		brand: "Audi",
		model: "A6 C7",
		priceStr: "2 760 001 руб.",
		priceNum: 2760000,
		volume: 10, 
		color: "Голубой",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 1,
		brand: "BMW",
		model: "3-Series G20",
		priceStr: "2 720 000 руб.",
		priceNum: 2720000,
		volume: 21, 
		color: "Синий",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 2,
		brand: "KIA",
		model: "Cerato",
		priceStr: "2 760 000 руб.",
		priceNum: 2760000,
		volume: 5, 
		color: "Красный",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 3,
		brand: "Mazda",
		model: "Mazda 6",
		priceStr: "1 567 000 руб.",
		priceNum: 1567000,
		volume: 15, 
		color: "Красный",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 4,
		brand: "Lada",
		model: "XRAY Cross",
		priceStr: "791 900 руб.",
		priceNum: 791900,
		volume: 20, 
		color: "Белый",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 5,
		brand: "Lada",
		model: "Largus",
		priceStr: "795 900 руб.",
		priceNum: 795900,
		volume: 56, 
		color: "Ледниковый",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 6,
		brand: "Audi",
		model: "Q8",
		priceStr: "3 530 000 руб.",
		priceNum: 3530000,
		volume: 10, 
		color: "Лазурно-синий",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 7,
		brand: "Audi",
		model: "Q3",
		priceStr: "1 215 000 руб.",
		priceNum: 1215000,
		volume: 3, 
		color: "Cиний",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 8,
		brand: "Lexus",
		model: "LX 450D",
		priceStr: "6 379 000 руб.",
		priceNum: 6379000,
		volume: 2, 
		color: "Белый",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 9,
		brand: "Lexus",
		model: "NX 200",
		priceStr: "2 599 000 руб.",
		priceNum: 2599000,
		volume: 10, 
		color: "Коричневый металлик",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	},
	{
		id: 10,
		brand: "DATSUN ",
		model: "ON-DO",
		priceStr: "416 000 руб.",
		priceNum: 416000,
		volume: 35, 
		color: "Серебристый",
		editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
		editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
	}
];

window.onload = ()=>{
	localStorage.setItem('auto', JSON.stringify(auto));
}
// функция постраничного вывода списка
function paginationFoo(){
	// если были добавлены новые записи, то они сохранятся 
	if(localStorage.getItem('auto')){
		auto = JSON.parse(localStorage.getItem("auto"));
	}
	// число элементов на одной странице
	let offset = 5;
	const countOfItems = Math.ceil(auto.length / offset);
	let items = [];
	// 
	for(let i = 1; i<= countOfItems; i++){
		let li = document.createElement("li");
		li.innerText = i;
		pagination.appendChild(li);
		items.push(li);
	}
	// при нажатии 
	for(let item of items){ 
		item.addEventListener("click", function(){
			showPage(this);
			dropDownMenus();
		});
	}
	// открываем первыю страницу по-умолчинию
	showPage(items[0]);

	function showPage(item){	
		let imgTrash = document.querySelectorAll(".img-trash");
		// класс active будет удален, при нажатии на другую Li
		let active = document.querySelector(".pagination li.active");
		if(active){
			active.classList.remove("active");
		}
		// добавил класс active для выбранной li
		item.classList.add("active");
		let pageNum =+ item.innerText;
		// формула для нужного числа машин на экране
		let start = (pageNum - 1) * offset;
		let end = start + offset;
		// вырезаем нужное количество из массива auto
		let notes = auto.slice(start, end);

		// очистка таблицу от старого нажатия
		tbody.innerHTML = "";

		// добавление в таблицу строк 
		for(let i = 0; i < notes.length; i++){
			let tr = document.createElement("tr");
			tr.classList.add("classtr");
			tbody.appendChild(tr);	

			tr.setAttribute("data-brand", notes[i].brand);
			tr.setAttribute("data-model", notes[i].model);
			tr.setAttribute("data-price", notes[i].priceNum);
			tr.setAttribute("data-volume", notes[i].volume);
			tr.setAttribute("data-color", notes[i].color);
			tr.setAttribute("data-id", notes[i].id);
			tr.setAttribute("data-count", i);

			// добавляем строки и к ним значение
			createCell(i+1, tr);
			createCell(notes[i].brand, tr);
			createCell(notes[i].model, tr);
			createCell(notes[i].color, tr);
			createCell(notes[i].volume, tr);
			createCell(notes[i].priceStr, tr);
			createCell(notes[i].editPencil, tr);
			createCell(notes[i].editTrash, tr);

			let imgTrash = document.querySelectorAll(".img-trash");
			imgTrash[i].setAttribute("data-id", notes[i].id);
			let imgPencil = document.querySelectorAll(".img-pencil");
			imgPencil[i].setAttribute("data-id", notes[i].id);

		}
	}
}
paginationFoo();

// функция для формирования столбцов в строке
function createCell(text, tr){
	let td = document.createElement("td");
	td.innerHTML = text;
	tr.appendChild(td);
}

// функция добавления в массив auto нового элемента
function addAuto(){
	let isResizeble = true;
	if(localStorage.getItem('auto')){
		auto = JSON.parse(localStorage.getItem("auto"));
	}
	for(let i = 0; i < inputs.length; i++){
		if(!inputs[i].value){
			inputs[i].classList.add("warning");
			setTimeout(function() {
       	 		inputs[i].classList.remove("warning");
       	 	},1500);

   	 	}else{
			// проверка полей
   	 		if(inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && inputs[4].value){
   	 			isResizeble = false;
				if(!isResizeble){
					// если все поля заполнены, то пушим
					auto.push(
						{
							id: auto.length,
							brand: inputs[0].value,
							model: inputs[1].value,
							priceStr: `${ inputs[4].value } руб.`,
							priceNum: inputs[4].value,
							volume: inputs[3].value, 
							color: inputs[2].value,
							editPencil: 	`<img class='td-img img-pencil' src="https://img.icons8.com/ios-filled/24/ffffff/pencil.png" />`,
							editTrash: 	`<img class='td-img img-trash' src='https://img.icons8.com/ios-filled/24/ffffff/trash.svg' />`
						}
					);
					isResizeble = true;
					localStorage.setItem('auto', JSON.stringify(auto));	
					window.location.reload();
				}
   	 		}
   	 	}	 	
       	inputs[i].value = "";
	}
}

// фукнция поиска 
function searchAuto(){

}

// функция сорировки цены по возрастанию
function sortPriceUp(){
	// происходит замена дочернего элемента на выбранный при выполнении условия 
	// условие - получение атрибутов и их сравнение 
	for(let i = 0; i < tbody.children.length; i++){
		for(let j = i; j < tbody.children.length; j++){
			if(+tbody.children[i].getAttribute("data-price") > +tbody.children[j].getAttribute("data-price")){
				let replacedNode = tbody.replaceChild(tbody.children[j], tbody.children[i]);
				insertAfter(replacedNode,  tbody.children[i]);
			}
		}
	}
}

// функция сортировки цены по убыванию
function sortPriceDown(){
	for(let i = 0; i < tbody.children.length; i++){
		for(let j = i; j < tbody.children.length; j++){
			if(+tbody.children[i].getAttribute("data-price") < +tbody.children[j].getAttribute("data-price")){
				let replacedNode = tbody.replaceChild(tbody.children[j], tbody.children[i]);
				insertAfter(replacedNode,  tbody.children[i]);
			}
		}
	}
}

// функция сорировки кол-ва по возрастанию
function sortVolumeUp(){
	// происходит замена дочернего элемента на выбранный при выполнении условия 
	// условие - получение атрибутов и их сравнение 
	for(let i = 0; i < tbody.children.length; i++){
		for(let j = i; j < tbody.children.length; j++){
			if(+tbody.children[i].getAttribute("data-volume") > +tbody.children[j].getAttribute("data-volume")){
				let replacedNode = tbody.replaceChild(tbody.children[j], tbody.children[i]);
				insertAfter(replacedNode,  tbody.children[i]);
			}
		}
	}
}

// функция сорировки кол-ва по убыванию
function sortVolumeDown(){
	for(let i = 0; i < tbody.children.length; i++){
		for(let j = i; j < tbody.children.length; j++){
			if(+tbody.children[i].getAttribute("data-volume") < +tbody.children[j].getAttribute("data-volume")){
				let replacedNode = tbody.replaceChild(tbody.children[j], tbody.children[i]);
				insertAfter(replacedNode,  tbody.children[i]);
			}
		}
	}
}

// функция для сортировки по строкам из выпадабщего меню
// три выпадающие: модель, марку, цвет 
function sortListDropmenu(){
	let itemsColors = selectСolor.children;
	let itemsBrands = selectBrand.children;
	let itemsModels = selectModel.children;

	for(let i = 0; i < itemsColors.length; i++){
		itemsColors[i].addEventListener("click", function(){
			for(let j = 0; j < tbody.children.length; j++){

			}
		});
	}
	for(let i = 0; i < itemsBrands.length; i++){
		itemsBrands[i].addEventListener("click", function(){
			for(let j = 0; j < tbody.children.length; j++){
				let attribute = tbody.children[i].getAttribute("data-brand");
				if(itemsBrands[i].textContent != attribute){
					tbody.children[i].style.display = "";
				}else{
					tbody.children[i].style.display = "none";
				}
			}
		});
	}
	for(let i = 0; i < itemsModels.length; i++){
		itemsModels[i].addEventListener("click", function(){
			for(let j = 0; j < tbody.children.length; j++){
				
			}
		});
	}
}

// создание списка в выпадающем меню с теми данными, которые открыты на странице
// три выпадающие: модель, марку, цвет 
function dropDownMenus(){
	let selectItemColor = "";
	let selectItemBrand = "";
	let selectItemModel = "";
	let attributeBefore = "";
	// формируется drop color
	for(let i = 0; i < tbody.children.length; i++){
		// код для select__color
		let attributeAfter = tbody.children[i].getAttribute("data-color");
		// проверка на одинаковые атрибуты
		if(attributeBefore != attributeAfter){
			attributeBefore = attributeAfter;
			// получен и выведен атрибут 
			selectItemColor += `<div class="select__item">${ attributeBefore }</div>`;
		}else{
			attributeAfter = "";
		}
	}
	// формируется drop brand
	for(let i = 0; i < tbody.children.length; i++){
		// код для select__brand
		let attributeAfter = tbody.children[i].getAttribute("data-brand");
		// проверка на одинаковые атрибуты
		if(attributeBefore != attributeAfter){
			attributeBefore = attributeAfter;
			// получен и выведен атрибут 
			selectItemBrand += `<div class="select__item">${ attributeBefore }</div>`;
		}else{
			attributeAfter = "";
		}
	}
	// формируется drop model
	for(let i = 0; i < tbody.children.length; i++){
		// код для select__model
		let attributeAfter = tbody.children[i].getAttribute("data-model");
		// проверка на одинаковые атрибуты
		if(attributeBefore != attributeAfter){
			attributeBefore = attributeAfter;
			// получен и выведен атрибут 
			selectItemModel += `<div class="select__item">${ attributeBefore }</div>`;
		}else{
			attributeAfter = "";
		}
	}
	selectСolor.innerHTML = selectItemColor;
	selectBrand.innerHTML = selectItemBrand;
	selectModel.innerHTML = selectItemModel;
}
dropDownMenus();
sortListDropmenu();

// клик по картинкам
document.onclick = function(event){
	let target = event.target;
	// картинка trash
	if(target.classList.contains("img-trash")){
		deleteRow(target.getAttribute('data-id'), target.getAttribute('data-count'));
	}
	// картинка pencil
	if(target.classList.contains("img-pencil")){
		showModalEdit(target.getAttribute('data-id'));
	}
}
// показываем модалку удаления
function showModalDelete(){
	document.querySelector(".modal__delete").style.display = "flex";
}
// показываем модалку редактирирования
function showModalEdit(id){
	document.querySelector(".modal__edit").style.display = "flex";
	editButton.setAttribute("data-id", id);
	let inputs = document.querySelectorAll(".modal__edit .container__input");
	let trAr = document.querySelectorAll(".classtr");
	// "костыли"  
	if(id >= 10 && id <= 14){
		id -= 10;
	}
	if(id >= 5 && id <= 9){
		id -= 5;
	}
	let dataAr = [trAr[id].dataset.brand,trAr[id].dataset.model,trAr[id].dataset.color,trAr[id].dataset.volume,trAr[id].dataset.price];
	for(let i = 0; i < inputs.length; i++){
		inputs[i].value = dataAr[i];
	}
}
// скрываем  модалку удаления
function hideModalDelete(){
	document.querySelector(".modal__delete").style.display = "";
}
// скрываем  модалку редактирования
function hideModalEdit(){
	document.querySelector(".modal__edit").style.display = "";
}
// удаление строки
function deleteRow(id, i){
	id = +id;
	// tbody.children[id].style.display = "none";
	auto = JSON.parse(localStorage.getItem("auto"));
	auto.splice(id, 1);
	localStorage.setItem('auto', JSON.stringify(auto));
	// modal.style.display = "";
	window.location.reload();
}
// редактирование строки
function editRow(){ 
	// для каждого edit имеется свой id в data-id
	let idButton = editButton.dataset.id;
	auto = JSON.parse(localStorage.getItem("auto"));
	let inputs = document.querySelectorAll(".modal__edit .container__input");
	
	// "костыли" заполнения объекта полученного из массива
	auto[idButton].brand = inputs[0].value;
	auto[idButton].model = inputs[1].value;
	auto[idButton].color = inputs[2].value;
	auto[idButton].volume = inputs[3].value;
	auto[idButton].price = inputs[4].value;

	// перепись массива auto и перезагрузка
	localStorage.setItem('auto', JSON.stringify(auto));
	window.location.reload();
}
// 
function insertAfter(elem, refElem){
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

containerButtonAdd.addEventListener("click", addAuto);
searchButton.addEventListener("click", searchAuto);
