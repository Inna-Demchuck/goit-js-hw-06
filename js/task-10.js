// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
//  коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.


// const createBtnEl = document.querySelector('[data-create]');
// const destroyBtnEl = document.querySelector('[data-destroy]');
// const boxesEl = document.querySelector('#boxes');
// const inputEl = document.querySelector('input');

// createBtnEl.addEventListener('click', onCreateBtnClick);
// destroyBtnEl.addEventListener('click', onDestroyBtnClick);
// amountEl.addEventListener('input', onInput);

// function onCreateBtnClick() {
//     const boxesEl = document.createElement("div");

//     document.body.append(boxesEl);
// };

// function onDestroyBtnClick() {

//     boxElement.innerHTML = "";
// };

// function createBoxes(amount) {


// }

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }