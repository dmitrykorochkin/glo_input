//Повесить на кнопку обработчик события click и реализовать такой функционал:

const input = document.getElementById('text');  // input
const btnTop = document.querySelector('#btn'); // вверхняя кнопка
const square = document.querySelector('#square');  // square квадрат
const btnBottom = document.querySelector('#e_btn');  // нижняя кнопка
const inputRange = document.getElementById('range'); // ползунок
const span = document.getElementById('range-span'); // значение ползунка
const circle = document.getElementById('circle'); // круг 

btnBottom.style.display = 'none';
circle.style.width = '50%';
circle.style.height = '50%';
span.innerHTML = '50%';


const logger = function (event){
    square.style.backgroundColor = input.value;
    
};

const range = function (e) {
   
    span.textContent = e.target.value + '%';
    circle.style.width = span.textContent;
    circle.style.height = span.textContent;

};



btn.addEventListener('click', logger);
inputRange.addEventListener('input', range);



