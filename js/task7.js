// Напиши скрипт, который реагирует 
// на изменение значения 
// input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя 
// свойство font-size. В результате при 
// перетаскивании ползунка будет меняться 
 // размер текста.

const rangeRef = document.querySelector('#font-size-control')
const magicTextRef = document.querySelector('#text')
magicTextRef.setAttribute('style', 'font-size')

rangeRef.addEventListener('input', function(){
    let rangeValue = rangeRef.value;
    magicTextRef.style.fontSize = rangeValue + "px";
}
)
