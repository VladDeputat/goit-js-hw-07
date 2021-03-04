// Напиши скрипт который, при наборе текста
// в инпуте input#name-input (событие input),
// подставляет его текущее значение в
// span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.oninput = function () {
  if (inputRef.value.length === 0) {
    outputRef.innerHTML = "незнакомец";
  } else {
    outputRef.innerHTML = inputRef.value;
  }
};
