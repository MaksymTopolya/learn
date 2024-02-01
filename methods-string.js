// ---------------Методи рядків--------------

//* 1 - slice() ===  str.slice(startIndex, endIndex)  ===  Метод slice() копіює підрядок із вихідного рядка, починаючи з індексу startIndex і до (не включаючи) індексу endIndex, і повертає цю копію як новий рядок.

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

//* 2 - toLowerCase() і toUpperCase()

//Метод toLowerCase() повертає новий рядок, у якому всі символи вихідного рядка перетворені в нижній регістр.

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!"

//Метод toUpperCase() повертає новий рядок, у якому всі символи вихідного рядка перетворені у верхній регістр.

const message1 = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

//* 3 - includes() === Метод рядків includes() використовується для перевірки наявності підрядка у рядку. Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній. Регістр символів у рядку й підрядку має значення.
 //Літера a, наприклад, не дорівнює літері A. 

const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('jacob')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('mercer')); // false

//* 4 - startsWith() і endsWith() === Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно. Вони повертають булеве значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню.
//startsWith()
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

//endsWith()
const str1 = "Hello, world!";
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

//* 5 - indexOf() === Метод indexOf() використовується для пошуку першого входження підрядка в рядок. Він повертає: індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або -1, якщо підрядок не виявлено.

const message2 = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8

const message = "Welcome to Bahamas!";
const index = message.indexOf("hello");
console.log(index); // -1

//* 6 - trim() === Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.

const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "