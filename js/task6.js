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

const inputRef = document.querySelector('#validation-input')

inputRef.oninput = () =>{
 if(inputRef.value.length < inputRef.dataset.length){
    inputRef.classList.add('invalid')
 } else {
    inputRef.classList.replace('invalid', 'valid')
 }
}




