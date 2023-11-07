// Задание 1
// Создайте классы: Plant, Rose.
// Роза должна наследовать Растение. Пусть у растения будут поля:

// рост,
// возраст.
// И метод grow, который увеличивает его рост на 10 см.

// У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.


class Plant {
    constructor(height, age){
      this.height = height;
      this.age = age;
    }
    grow(){
        this.height += 10;
        console.log(`the length of the rose is now: ${this.height} centimeters`);
    }
  }

class Rose extends Plant{
    constructor(height, age, numberOfFlowers){
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

const bigRose = new Rose(100, 1.5, 3);
bigRose.grow();
bigRose.grow();
bigRose.grow();
console.log(bigRose);
console.log('numberOfFlowers', bigRose.numberOfFlowers);

for (const key in bigRose){
    console.log(key + ":" + bigRose[key]);
}

