// Напиши скрипт, который бы при потере
// фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество, то
// border инпута становится зеленым, если
// неправильное - красным.
// Для добавления стилей, используй CSS-классы
// valid и invalid.
//<input type="text" id="validation-input"
//data-length="6" placeholder="Введи 6 символов" />

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", function (event) {
  if (inputRef.value.length === +inputRef.dataset.length) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
});
