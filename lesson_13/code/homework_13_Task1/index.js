// #Задание 1
// Появление цифр на экране от 1 до 5: 
// Создайте страницу с 5 элементами (например, div). 
// Используйте setTimeout(), Нужно сделать их видимыми 
// по очереди через каждую секунду после загрузки страницы.

const allBox = document.querySelectorAll(".box");

// for (let i = 0; i < allBox.length; i++) {
//     setTimeout(() => {
//         allBox[i].style.display = "flex";
//     }, 1000);

// }

for (let i = 0; i < allBox.length; i++) {
    setTimeout(function() {
        allBox[i].style.display = "flex";
    }, 1000 * i);
}