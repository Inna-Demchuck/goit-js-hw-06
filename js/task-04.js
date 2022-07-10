// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и 
// уменьшать его значение на единицу.


// Создай переменную counterValue в которой будет храниться текущее значение 
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const button = {
    incr: document.querySelector("[data-action='increment']"),
    decr: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    button.span.textContent = counterValue;
};

button.incr.addEventListener("click", increment);
button.decr.addEventListener("click", decrement);