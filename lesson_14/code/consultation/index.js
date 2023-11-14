// working with fetch api

// 1 пример
// Задача: сделать get запрос на удаленный ресурс по url
// получить данные по сети
// использовать синтакси async/await и fetch
const requestButton = document.getElementById("request-button");
const personName = document.querySelector(".name");
const personAvatar = document.getElementById("person-avatar");
const personPhone = document.querySelector(".phone");
const personEmail = document.querySelector(".email");

function userDataNormalizer(personData) {
    personAvatar.src = personData.picture.large;
    personName.textContent = `${personData.name.title} ${personData.name.first} ${personData.name.last}`;
    personPhone.textContent = personData.phone;
    personEmail.textContent = personData.email;
}

async function getUserData() {
    // Создаем переменную куда кладем наш url
    const apliancesURL = "https://randomuser.me/api/";

    // Получаем обьект Response используя fetch- делая GET запрос
    // и await - для получения результата
    const response = await fetch(apliancesURL);
    console.log("Response", response); // обьект Response
    console.log("Prop ok", response.ok); // true или false
    console.log("Prop status", response.status); // 200,400,500 и т.д

    const result = await response.json();
    console.log(result);

    // OK или не ок - успешно завершен запрос или нет
    if (response.ok) {
        // Забираем результат выполнения response, т.е тело ответа(наш обьект)

        const personInfo = result.results; // массив обьектов

        const person = personInfo[0]; // забираем обьект с данными юзера
        console.log(person);
        userDataNormalizer(person);
    } else {
        // ловим ошибку
        console.log("Some Erorr");
        alert(result);
    }

    // Альтернатива - через try...catch - однако catch не ловит все ошибки
    // в случае с fetch - поэтому нужно все равно явно проверять  if (response.ok) {} else{}

    //   try {
    //     const result = await response.json();
    //     console.log(result);

    //     if (response.ok) {
    //       // делаем операции с успешным выполнением
    //     } else {
    //       // вызываем ошибку
    //       throw new Error("error");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
}

requestButton.addEventListener("click", getUserData);