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



const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const colorBoxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

createBtnEl.addEventListener('click', onCreateBoxes);
destroyBtnEl.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
    let numbers = [];
    for (let i = 1; i <= inputEl.value; i += 1) {
        numbers.push(i);
    };
    const createDivs = numbers.map((number) => {
        const divEl = document.createElement('div');
        const value = ((30 + colorBoxEl.childElementCount * 10) + number * 10);
        divEl.style.width = `${value}px`;
        divEl.style.height = `${value}px`;
        divEl.style.backgroundColor = getRandomHexColor();
        return divEl;
    });

    colorBoxEl.append(...createDivs);
    console.log(colorBoxEl);
};

function onDestroyBoxes() {
    inputEl.value = '';
    colorBoxEl.innerHTML = '';
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};