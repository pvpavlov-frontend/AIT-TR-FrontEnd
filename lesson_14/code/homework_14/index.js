// Homework
// Задание 1
// По аналогии с тем как мы работали с обьектом appliances, который я разместил на github pages.

// Создайте новый репозиторий на гитхаб, разместите в нем файл ИМЯ_ФАЙЛА.json на ваш выбор (например, можно про страну или автомобиль и т.д.).
//  Опубликуйте на git pages. Получите ссылку, куда кидать fetch.
// После этого создайте страницу с подключенным js файлом. Получите 
// информацию из вашего json при помощи fetch и async/await, 
// отразите ее на странице, отобразить желательно красиво - задание творческое

// Пример json обьекта можете посмотреть по ссылке
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
    const apliancesURL = "http://api.zippopotam.us/us/ma/belmont";
    // https: //deckofcardsapi.com/api/deck/c3hmntqq4wne/draw/?count=1

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

        const personInfo = result.entries; // массив обьектов

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