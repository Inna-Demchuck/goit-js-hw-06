const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const itemsList = (ingredients) => ingredients.reduce((acc, ingredient) => acc + `<li class = "item">${ingredient}</li>`, "");


const list = document.querySelector("ul");
list.insertAdjacentHTML("beforeend", itemsList(ingredients));


console.log(itemsList(ingredients));