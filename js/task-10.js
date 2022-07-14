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


// // получаем ссылку на кнопку создать
// const createBtnEl = document.querySelector('[data-create]');

// // добавляем событие клика на кнопку создать
// createBtnEl.addEventListener('click', onCreateBoxes);

// // получаем ссылку на инпут
// const inputEl = document.querySelector('input');

// // получаем ссылку на див
// const outBoxes = document.querySelector('#boxes');



// function onCreateBoxes() {

//     // получаем текст из инпута
//     const contentInput = inputEl.value;
//     console.log(contentInput);
//     // в див выводим значение из инпута
//     outBoxes.innerHTML += contentInput;
//     // arrayBoxes.push(elementBox);
//     console.log(contentInput);


// }

// // добавляем событие клика на кнопку удалить
// const destroyBtnEl = document.querySelector('[data-destroy]');

// // добавляем событие клика на кнопку удалить
// createBtnEl.addEventListener('click', onDestroyBoxes);

// function onDestroyBoxes() {

//     // outBoxes.innerHTML = '';
//     // inputEl.value = '';
// };

// --------------------------------------------------------------------------------

// const createBtnEl = document.querySelector('[data-create]');
// const destroyBtnEl = document.querySelector('[data-destroy]');
// const colorBoxEl = document.querySelector('#boxes');
// const inputEl = document.querySelector('input');

// createBtnEl.addEventListener('click', onCreateBoxes);
// // destroyBtnEl.addEventListener('click', onDestroyBoxes);
// inputEl.addEventListener('input', onInput);


// // let arrayBoxes = [];

// function onInput(event) {
//     // получаем текст из инпута
//     const elementBox = event.currentTarget.value;
//     console.log(elementBox);
//     // в див выводим значение из инпута
//     elementBox = colorBoxEl.innerHTML;
//     // arrayBoxes.push(elementBox);
//     console.log(elementBox);

// };



// function onCreateBoxes(amount) {

//     for (let i = 1; i <= inputEl.value; i += 1) {
//         arrayBoxes.push(i);
//         console.log(onCreateBoxes);
//     };

//     const boxes = arrayBoxes.map((number) => {
//         const colorBoxEl = document.createElement("div");
//         const value = (30 + number * 10);
//         boxes.style.width = `${value}px`;
//         boxes.style.height = `${value}px`;
//         boxes.style.backgroundColor = getRandomHexColor();
//         return colorBoxEl;
//     });
//     colorBoxEl.append(...boxes);
// };

// function onDestroyBoxes() {

//     colorBoxEl.innerHTML = " ";
//     inputEl.value.innerHTML = " ";
// };

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`
// };