'use strict';
// Задание 1
// У вас есть массив объектов:

// const cars = [
//     { brand: "BMW", price: 20000, isDiesel: true },
//     { brand: "Mercedes", price: 22000, isDiesel: false },
//     { brand: "Porshe", price: 50000, isDiesel: true },
//     { brand: "Nissan", price: 25000, isDiesel: false },
// ];
// Создайте на основе страрого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const carsWithoutPrice  = cars.map(car => {
    const carWithoutPrice = { ...car };
    delete carWithoutPrice.price;
    return carWithoutPrice;
});

console.log("cars => ",cars);
console.log("carsWithoutPrice => ",carsWithoutPrice);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const onlyDiesel = cars.filter((value) => value.isDiesel === true);

console.log("onlyDiesel => ", onlyDiesel);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const noneDiesel = cars.filter((value) => value.isDiesel !== true);
console.log("noneDiesel => ", noneDiesel);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const sumNoneDiesel = noneDiesel.reduce((a, b) => a + b.price, 0);
console.log("onlyDiesel => ", noneDiesel);
console.log("sumNoneDiesel => ", sumNoneDiesel);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((value) => value.price = value.price + value.price / 100 * 20)
console.log("cars => ", cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на 
// { brand: "Tesla", price: 25000, isDiesel: false }

function getnoneDiesel(value) {
    return value.isDiesel !== true;
}

const isDiesel = cars.filter(getnoneDiesel);
console.log("isDiesel =>",isDiesel);

isDiesel.forEach((value) => value.brand = "Tesla");
console.log("isDiesel =>",isDiesel);

// Задание 7*
// Создайте переменную name со строковым значением "education" 
// Создайте функцию с именем converter, которая в качестве аргумента 
// принимает строку(ваша переменная name) и возвращает слово наоборот! 
// Например: на входе функция принимает строку "hello", 
// а на выходе должна вернуть "olleh". !!!Важно: используйте методы массивов и строк

let name = "education";
console.log("name => ",name);

function converter(str){
    return [...str].reverse().join('');
}

console.log("reverse name => ", converter(name));
