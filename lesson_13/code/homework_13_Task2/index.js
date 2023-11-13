// Задание 2
// Создать кнопку "Изменить цвет" и создайте квадрат красного цвета. 
// при нажатии на кнопку, через 2 секнды цвет должен изменитьяся на зеленый

const btn = document.querySelector(".chengeColor");
const box = document.querySelector(".box");
let flag = true;


btn.addEventListener("click", function() {
    setTimeout(function() {
        box.style.background = (flag = !flag) ? 'red' : 'green';
    }, 2000);

});