// Счетчик состоит из спана и кнопок, которые должны
//  увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
//  текущее значение счетчика.
// Создай функции increment и decrement для увеличения 
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и 
// обновление интерфейса.

let currentValue = document.querySelector('#value');
let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')

incrementBtn.addEventListener('click', () => 
{counterValue += 1;
currentValue.textContent = counterValue});

decrementBtn.addEventListener('click', () =>
{counterValue -= 1;
currentValue.textContent = counterValue});
