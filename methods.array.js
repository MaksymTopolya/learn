// ------------------- Методи масивів-----------------
// //* 1 - join() === Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок. У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

// //* 2 - split() === Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter). Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.

const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words1 = message.split(" ");
console.log(words1); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"] У третьому прикладі рядок "amazing-french-recipes" було розділено на три елементи масиву, використовуючи тире як роздільник

// //* 3 - slice() === Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.

const planets1 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets1.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets1.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets1.slice(1, 3)); // ['Mars', 'Venus']

// Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:
const planets2 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets2.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

//Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:
const planets3 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets3.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets3.slice(2)); // ["Venus", "Jupiter", "Saturn"]

//Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів (тобто стільки елементів з кінця, скільки вказано в параметрі begin):
const planets4 = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets4.slice(-2)); // ["Jupiter", "Saturn"]

// //* 4 - concat() === Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

const firstArray1 = ["Mercury", "Venus"];
const secondArray1 = ["Mars", "Jupiter"];
const result = firstArray1.concat(secondArray1);
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

//Порядок аргументів методу визначає порядок розташування елементів у новому масиві.

const firstArray2 = ["Mercury", "Venus"];
const secondArray2 = ["Mars", "Jupiter"];
const thirdArray2 = ["Saturn", "Neptune"];

console.log(firstArray2.concat(secondArray2, thirdArray2));
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

console.log(firstArray2.concat(thirdArray2, secondArray2));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

// //* 5 - indexOf() === Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві.
// //* Він повертає індекс елемента, якщо він знайдений, або - 1, якщо елемент не знайдений.Метод indexOf() виконує сувору рівність(===) при порівнянні елементів.

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

// //* 6 - push() === Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.

const planets = ["Earth", "Mars", "Venus"];

planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]
 
// //* 7 - pop() === Метод масиву push() використовується для видалення елемента з кінця масива.

var myFish = ["ангел", "клоун", "мандарин", "хирург"];
console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']

var popped = myFish.pop();
console.log(myFish); // ['ангел', 'клоун', 'мандарин']

console.log(popped); // 'хирург'


//* 8 - forEach() === Метод forEach(function( )) виконує зазначену функцію один раз для кожного елемента в масиві. Цей метод полегшує виконання операцій кожного елемента масиву без необхідності явного використання циклу. Можна добавляти індекс якщо потрібно.
// * Може змінювати основний масив

// див в консолі як працює

// взнати скільки чоловіків і жінок
const users = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]

const count = {
    men: 0,
    women: 0
}

users.forEach(function (item, index) {
    // console.log(item) // покаже кожний об'єкт масиву окремо. покаже теж саме якби написав for(let item of users){ clg(item) }
    // console.log(index) // якщо я допишу index я зможу бачити порядковий індекс елемента
    if (item.sex === "male") {
        count.men++
    } else {
        count.women++
    }
})

console.log(count)


//* 9 - filter() === фільтрує елементи мaсиву за заданою нами умовою . Можна добавляти індекс якщо потрібно(так як в forEach).Повертає новий масив не змінюючи старий

//див в консолі як працює

//порахувати скільки людей які старші 18років
const users1 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]


const adults = users1.filter(function (element){
    return element.age >= 18
})

console.log(adults)



//* 10 - map() === проходиться по заданому масиву і змінює його записи. повертає новий масив не змінюючи оригінального

//нам потрібно до male додати Mr.  а до female - Ms.

const users2 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]


const correctNames = users2.map(function (element){
    return element.sex === "male" ? "Mr. " + element.name : "Ms. " + element.name;
    // return element.sex // можемо вернути лише стать
})

console.log(correctNames)



//* 11 - reduce - може отримувати 4 аргумента (accumulator, correctValue, index, aray). може робить математичні операції

//нам потрібно отримати середній вік користувачів сайту

const users3 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]

// 1. acumulator = 0, carrectValue = 35
// 2. acumulator = 35, carrectValue = 15
// 3. acumulator = 50, carrectValue = 19
// 4. acumulator = 69

const sum = users3.reduce(function (accumulator, correctValue) {
    return accumulator + correctValue.age
}, 0)  //0 - це точка відліка з якої ми хочемо почати розрахунок. якщо ми напишемо 100 то сума буде на сто більше бо вона починається зі 100

console.log(sum) // 69

const mediumAge = sum / users3.length


//* 12 - find - (function(item, index))  -  шукає об'єк в масиві за данною нами умови. повертає масив з значенням


const users4 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]

const findObj = users4.find(function (item) {
    return item.name === "Nikita"
})

console.log(findObj)


//* 13 - some - перевіряє чи хотяби один об'єкт містить дану умову. повертає булеве значення

const users5 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]

const someObj = users5.some(function (item) {
    return item.name === "Nikita"
})

console.log(someObj)  // true


//* 14 - every - перевіряє чи кожен об'єкт містить дану умову. повертає булеве значення

const users6 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]

const everyObj = users6.every(function (item) {
    return item.age > 13
})

console.log(everyObj)  // true


//* 15 - findIndex - перевіряє кожний елемент чи він містить данну умову. якщо ні йде далі а якщо так то виводить index об'єкта. повертає -1 якщо не може найти елемент з данною умовою

const users7 = [
    {
        name: "Masha",
        age: 35,
        sex: "female"
    },
    {
        name: "Nikita",
        age: 15,
        sex: "male"
    },
    {
        name: "Maksim",
        age: 19,
        sex: "male"
    },
]

const findIndexObj = users7.findIndex(function (item) {
    return item.age === 19
})

console.log(findIndexObj)  // 2

//* 16 - splice - Використовується щоб видалити елементи по індексу

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);
console.log(fruits)// ["Banana", "Kiwi"]



