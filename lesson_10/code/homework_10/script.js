// Задание 1
// Создайте стрелочную функцию, которая бы принимала массив 
// и цифру, возвращала бы элемент массива под этим индексом.
'use strict';
const numArray = [1, 2, 3, 4, 5];

const arrayElement = (myArray, index) => myArray[index];
const res = arrayElement(numArray, 2);
console.log(res);

// Задание 2 (spread)
// Создайте функцию, которая принимает два массива, возвращать она 
// должна новый массив, состоящий из всех элементов исходных массивов.

const nextArray = [6, 7, 8, 9, 10];
// const alleElements = (arr1, arr2) => [ ...arr1, ...arr2 ]; 
const alleElements = (arr1, arr2) => arr1.concat(arr2); 
console.log(alleElements(numArray, nextArray));


// Задание 3 * (передача функции в качестве параметра)
// Создайте функцию, которая бы принимала бы следующие параметры:

// код погоды

// функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.

function abstract(str, fn){
    let value = fn(str);
    return value;
}

function decode(code){
    switch (code) {
        case 'SQ':
            console.log(`${code} = шквал`);
            break;
        case 'PO':
            console.log(`${code} = пыльный вихрь`);
            break;
        case 'FC':
            console.log(`${code} = торнадо`);
            break;
        case 'BR':
            console.log(`${code} = дымка (видимость от 1 до 9 км)`);
            break;
        case 'HZ':
            console.log(`${code} = мгла (видимость менее 10 км)`);
            break;
        case 'FU':
            console.log(`${code} = дым (видимость менее 10 км)`);
            break;
        case 'DS':
            console.log(`${code} = пыльная буря (видимость менее 10 км)`);
            break;
        case 'SS':
            console.log(`${code} = песчаная буря (видимость менее 10 км)`);
            break;
        default:
          console.log(`Sorry, we are out of ${code}.`);
    }
}
   
abstract('DS', decode);
