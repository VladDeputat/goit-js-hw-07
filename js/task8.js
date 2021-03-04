// Напиши скрипт создания и очистки коллекции
// элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая
// принимает 1 параметр amount - число. Функция
// создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен
// быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает
// div#boxes.

const containerRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

let randomEl = () => Math.round(Math.random() * 255);

let randomColor = function () {
  let color = `rgb(${randomEl()} ${randomEl()} ${randomEl()})`;
  return color;
};

const createBoxes = (amount) => {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.setAttribute(
      "style",
      `width: ${width + i * 10}px; height: ${height + i * 10}px; margin: 10px; background-color: ${randomColor()};`
    );
    containerRef.append(newBox);
  }
};

const destroyBoxes = () => {
  containerRef.innerHTML = "";
};

renderBtnRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});
destroyBtnRef.addEventListener("click", destroyBoxes);
