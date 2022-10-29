// 1. Написати функцію calculateTotalPrice(items)
// яка прийме масив цін (чисел) і поверне їх суму
// -----------------------------------------------------------------------------------

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 1) щоразу буде перебиратись (залежна скільки разів будемо викликати)

// let total = 0;

// for (const value of cart) {
// 	total += value;
// }

// console.log('Total: ', total);

// 2) функцією робимо один раз і вона перебирає стільки скільки задано значень

// const calculateTotalPrice = function (items) {
// 	let total = 0;

// 	for (const item of items) {
// 		total += item;
// 	}
// 	return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));
// ===========================================================================================

// 2. Написати ф-ю logItems(items) для перебору і логування масиву
// функція без повернення ( без return)
// -----------------------------------------------------------------------------------

// const logItems = function (items) {
// 	for (const item of items) {
// 		console.log(item);
// 	}
// };

// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);
// logItems(["клавіатура", "навушники", "годинник"]);

// ===============================================================================================
// 3. Написати ф-ю findLogin(allLogins, login) для пошуку логіна
// - Якщо логіну немає, вивести повідомлення 'Користувач [логін] не знайдений.'
// - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдений.'
// --------------------------------------------------------------------------------------------

// const logins = ["sdfsdff", "iuoiretjksdf", "sdfsdfnn", "lpfgdkjhij"];

// const logins2 = ["ghfgdh", "liuoitjsrty", "eqgdfbhki", "vkligdndgndgnh"];
// 1. без функції (щоразу потрібно вводити)

// const loginToFind = "lpfgdkjhij";

// const message = logins.includes(loginToFind)
// 	? `Користувач ${loginToFind} знайдений.`
// 	: `Користувач ${loginToFind} не знайдений.`;

// console.log(message);

// 2. функція з циклом for

// const findLogin = function (allLogins, loginToFind) {
// 	// console.log(allLogins);
// 	// console.log(loginToFind);

// 	for (const login of allLogins) {
// 		if (login === loginToFind) {
// 			return `Користувач ${loginToFind} знайдений.`;
// 		}
// 	}
// 	return `Користувач ${loginToFind} не знайдений.`;
// };

// console.log(findLogin(logins, "sdfsdf"));
// console.log(findLogin(logins, "sdfsdff"));
// console.log(findLogin(logins, "kuygyjyf"));
// console.log(findLogin(logins, "sdfsdfnn"));

// console.log(findLogin(logins2, "sdfsdfndfdfn"));
// console.log(findLogin(logins2, "liuoitjsrty"));
// console.log(findLogin(logins2, "sdfsdfnn"));
// console.log(findLogin(logins2, "vkligdndgndgnh"));

// 3. функція з тернарним оператором

// const findLogin = function (allLogins, loginToFind) {
// 	return allLogins.includes(loginToFind)
// 		? `Користувач ${loginToFind} знайдений.`
// 		: `Користувач ${loginToFind} не знайдений.`;
// };

// console.log(findLogin(logins, "sdfsdf"));
// console.log(findLogin(logins, "sdfsdff"));
// console.log(findLogin(logins, "kuygyjyf"));
// console.log(findLogin(logins, "sdfsdfnn"));

// console.log(findLogin(logins2, "sdfsdfndfdfn"));
// console.log(findLogin(logins2, "liuoitjsrty"));
// console.log(findLogin(logins2, "sdfsdfnn"));
// console.log(findLogin(logins2, "vkligdndgndgnh"));
// ===============================================================================================

// 3. Напиши ф-ю findSmallesNumber(numbers) для пошуку найменшого числа в масиві
// при умові, що числа унікальні (не повторяються)
// ------------------------------------------------------------------------

// 1. без функції (щоразу потрібно вводити)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
// 	if (number < smallestNumber) {
// 		smallestNumber = number;
// 	}
// }
// console.log(smallestNumber);

// 2. функція з циклом for

// const findSmallesNumber = function (numbers) {
// 	let smallestNumber = numbers[0];

// 	for (const number of numbers) {
// 		if (number < smallestNumber) {
// 			smallestNumber = number;
// 		}
// 	}
// 	return smallestNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));
// =====================================================================================================

// 4. Напиши ф-ю changeCase(string), яка змінює регістр кожного символув рядку напротилежний
// Наприклад,, якшо рядок "JavaScript", то на виході повиннен бути рядок "jAVAsCRIPT"
// ----------------------------------------------------------------------------------------------

// const string = "qWeRTzxCv";
// const letters = string.split("");
// let invertedString = "";

// 1. без функції (щоразу потрібно вводити)

// for (const letter of letters) {
// 	const isEqual = letter === letter.toLowerCase();

// 	invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log("invertedString: ", invertedString);

// 2. функція з циклом for

// const changeCase = function (string) {
// 	const letters = string.split("");
// 	let invertedString = "";

// 	for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

// 		invertedString += isInLowerCase
// 			? letter.toUpperCase()
// 			: letter.toLowerCase();
//     }

// 	return invertedString;
// };

// console.log(changeCase("qweRTY"));
// console.log(changeCase("mAnGo"));
// console.log(changeCase("AjAx"));
// ==============================================================================================

// 5. Напиши ф-ю slugify(string), яка отримує рядок і повертає URL-slug
// рядок складається, тільки із букв і пробілів
// -----------------------------------------------------------------------------------

// const title = "Top 10 benefits of React framework";

// 1. без функції (щоразу потрібно вводити)

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(" ");
// const slug = words.join("-");

// const slug1 = title.toLowerCase().split(" ").join("-");

// console.log(slug);
// console.log(slug1);

// 2. функція з циклом for

// const slugify = function (string) {
// const normalizedTitle = string.toLowerCase();
// const words = normalizedTitle.split(" ");
// const slug = words.join("-");

// return slug;

// або

// 	return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Top 10 benefits of React framework"));
// console.log(slugify("Azure Static Web Apps are Awesome"));
// console.log(slugify("Technical writing tips for non-native English speakers"));

// ========================================================================================
// 6. Напиши ф-ю add для додавання будь-якої кількості аргументів (чисел)
// - операція ...(rest)
// ----------------------------------------------------------------------------------------

// const add = function (a, b, c, d, ...args) {
// 	console.log(a, b, c, d);
// 	console.log(args);
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// const add = function (...args) {
// 	console.log(args);
// 	let total = 0;

// 	for (const arg of args) {
// 		total += arg;
// 	}

// 	return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// ================================================================================
// 7. Напиши ф - ю filterNumbers(array[, number1, ...]), яка
// - першим аргументом приймає масив чисел
// - після першого аргумента може бути довільне число інших аргументів які будуть числами
// - функція повинна повернути новий масив, в якому будуть тільки ті аргументи починаючи з другого,
// для яких є аналог в оригінальному масиві
// ---------------------------------------------------------------------------------------------

// const filterNumbers = function (array, ...args) {
// 	console.log("array: ", array);
// 	console.log("args: ", args);
// 	const uniqeElements = [];

// 	for (const element of array) {
// 		if (args.includes(element)) {
// 			uniqeElements.push(element);

// 			console.log(`${element} є всюди!`);
// 		}
// 	}

// 	return uniqeElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
// ==============================================================================================

// hw
//  7. Напиши ф - ю filterNumbers(array[, number1, ...]), яка
// - першим аргументом приймає масив слів
// - після першого аргумента може бути довільне слово інших аргументів які будуть словами
// - функція повинна повернути новий масив, в якому будуть тільки ті аргументи починаючи з другого,
// для яких є аналог в оригінальному масиві
// ----------------------------------------------------------------------------------------
// const filterStrings = function (array, ...args) {
// 	// console.log("array: ", array);
// 	// console.log("args: ", args);
// 	const uniqeElements = [];

// 	for (const element of array) {
// 		if (args.includes(element)) {
// 			uniqeElements.push(element);

// 			console.log(`${element} є всюди!`);
// 		}
// 	}

// 	return uniqeElements;
// };

// console.log(filterStrings(['Один', 'два', 'три', 'чотири'], 'пять', 'шість', 'два', 'сім', 'вісім'));

// const defElements = function (array, ...args) {
//     	console.log("array: ", array);
// 	console.log("args: ", args);
//     const uniqeElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqeElements.push(element);

//             console.log(`${element} є всюди`);
//         }
//     }
//     return uniqeElements;
// }
// console.log(defElements([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));

// ==================================================================

// Патерн (раннє повернення (з return))
// -------------------------------------------------------------------

// const checkAge = function (age) {

//   if (age >= 18) {
//    return  "Ви повнолітня людина";
//   }

//     return "Ви неповнолітня людина";
// }

// console.log(checkAge(20));
// // ========================================================================
// Напиши функцію getExtremeElements(array), яка приймає один параметр array
//     - масив елементів довільної довжини.Функція повинна повертати масив
//      з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {

//     let ExtremeElements = [array[0], array[array.length - 1]];
//     console.log(ExtremeElements);

//     return ExtremeElements;
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// повертає[1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"]);
// повертає["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"]);
// повертає["apple", "banana"]

// =====================================================================
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// ---------------------------------------------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     const messageIndex = message.split(' ').length;
//     console.log(messageIndex);
//     const EngravingPrice = messageIndex * pricePerWord;
//     console.log(EngravingPrice);

//   return EngravingPrice;

//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);
// =========================================================================

// Доповни код функції makeStringFromArray(array, delimiter)
//  таким чином, щоб вона повертала у змінній string результат
//   з'єднання елементів масиву array з роздільником delimiter
//     - рядок.
// ----------------------------------------------------------------------

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//     string = array.join(delimiter);
//     console.log(string);

//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// // "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// // "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_");
// // "top_picks_for_you"
// =======================================================================

// Термін slug - це людино - зрозумілий унікальний ідентифікатор,
//     який використовується у веб - розробці для створення
// читабельних URL - адрес.

//     Наприклад, замість того, щоб користувач побачив в адресному
// рядку mysite.com / posts / 1q8fh74tx, можна зробити slug з назви
// статті.
// В результаті адреса буде приємнішою для сприйняття:
// mysite.com / posts / arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого
// розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті,
//     параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені
// лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// ----------------------------------------------------------------------

// function slugify(title) {
//   // Change code below this line

//     const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);
//     return slug;

//   // Change code above this line
// }
// slugify("Arrays for begginers");
// // "arrays-for-begginers"
// slugify("English for developer");
// // "english-for-developer"
// slugify("Ten secrets of JavaScript");
// // "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS");
// // "how-to-become-a-junior-developer-in-two-weeks"
// =======================================================================

// МЕТОД SLICE()

// Доповни код таким чином, щоб змінні містили часткові копії
//  вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// -----------------------------------------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// // "apple", "plum"
// console.log(nonExtremeEls);
// // "plum", "pear", "orange"
// console.log(lastThreeEls);
// // "pear", "orange", "banana"
// ====================================================================

// МЕТОД CONCAT()

// Доповни код таким чином, щоб у змінній allClients утворився масив
//  усіх елементів масивів oldClients і newClients.
// ------------------------------------------------------------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(oldClients);
// // "Mango", "Ajax", "Poly", "Kiwi"
// console.log(newClients);
// // "Peach", "Houston"
// console.log(allClients);
// // "Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"
// ===================================================================

// ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ

// Напиши функцію makeArray(firstArray, secondArray, maxLength)
// для створення нового масиву з усіма елементами двох вихідних
// firstArray і secondArray.Параметр maxLength містить максимально
// допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength,
// функція повинна повернути копію масиву довжиною maxLength
// елементів.В іншому випадку функція повинна повернути новий
// масив повністю.
// --------------------------------------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray).slice(0, maxLength);
//     console.log(newArray);
//     return newArray;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// // ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// // ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// // ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// // ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// // ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// // []
// ==============================================================

// ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)

// Напиши функцію calculateTotal(number), яка приймає ціле число
// (параметр number) і повертає суму всіх цілих чисел від одиниці
// і до цього числа.Наприклад, якщо number дорівнює 3, то сума -
// це 1 + 2 + 3, тобто 6.
// ----------------------------------------------------------------

// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
// console.log(total);

//     return total;
// }

// calculateTotal(1);
// // 1
// calculateTotal(3);
// // 6
// calculateTotal(7);
// // 28
// calculateTotal(18);
// // 171
// calculateTotal(24);
// 300
// ========================================================

// ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ

// Напиши функцію calculateTotalPrice(order), яка приймає
// один параметр order - масив чисел, і обчислює загальну
// суму його елементів.Загальна сума елементів повинна зберігатися
// у змінній total, яка повертається як результат роботи функції.
// -------------------------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;

//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     console.log(total);

//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// // 138
// calculateTotalPrice([164, 48, 291]);
// // 503
// calculateTotalPrice([412, 371, 94, 63, 176]);
// // 1116
// ==============================================================

// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА

// Напиши функцію findLongestWord(string), яка приймає
// довільний рядок, що складається тільки зі слів, розділених
// пробілом(параметр string), і повертає найдовше слово в цьому
// рядку.
// -------------------------------------------------------------

// function findLongestWord(string) {
//     const array = string.split(' ');
//     console.log(array);

//     let LongestWordIndex = array[0].length;
//     console.log(LongestWordIndex);

//     let LongestWord = array[0];
//     console.log(LongestWord);

//     for (let i = 0; i < array.length; i += 1) {
//         if (LongestWordIndex < array[i].length) {
//             LongestWordIndex = array[i].length;
//             console.log(LongestWordIndex);
//             LongestWord = array[i];
//             console.log(LongestWord);

//         }
//     }

//     return LongestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// // jumped
// findLongestWord("Google do a roll");
// // Google
// findLongestWord("May the force be with you");
// // force
// ===================================================================

// МЕТОД PUSH()

// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення
// min до max.
// ----------------------------------------------------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
// }

//     console.log(numbers);

//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// // [1, 2, 3]
// createArrayOfNumbers(14, 17);
// // [14, 15, 16, 17]
// createArrayOfNumbers(29, 34);
// // [29, 30, 31, 32, 33, 34]
// ===============================================================

// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// Напиши функцію filterArray(numbers, value), яка приймає масив
// чисел(параметр numbers) і повертає новий масив, в якому будуть
// тільки ті елементи масиву numbers, які більші за значення
// параметра value(число).
// ------------------------------------------------------------------
// 1) for

// function filterArray(numbers, value) {
//    // Change code below this line
//     const newArray = [];

//     for (let i = 0; i < numbers.length; i += 1) {

//         if (numbers[i] > value) {
//             newArray.push(numbers[i]);
//         }
//     }
//     console.log(newArray);

//     return newArray;

//   // Change code above this line
//     }

// filterArray([1, 2, 3, 4, 5], 3);
// // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4);
// // [5]
// filterArray([1, 2, 3, 4, 5], 5);
// // []
// filterArray([12, 24, 8, 41, 76], 38);
// // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20);
// // [24, 41, 76]

// 2) for...of

// function filterArray(numbers, value) {
//    // Change code below this line
//     const newArray = [];

//     for (const number of numbers) {
//         if (number > value) {
//             newArray.push(number);
//        }
//    }
//     console.log(newArray);

//     return newArray;

//   // Change code above this line
//     }

// filterArray([1, 2, 3, 4, 5], 3);
// // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4);
// // [5]
// filterArray([1, 2, 3, 4, 5], 5);
// // []
// filterArray([12, 24, 8, 41, 76], 38);
// // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20);
// // [24, 41, 76]
// ===============================================================

// МЕТОД INCLUDES()

// Функція checkFruit(fruit) приймає рядок з назвою фрукта
// (параметр fruit), і перевіряє, чи присутній такий фрукт
// в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// ----------------------------------------------------------------

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");
// // true
// checkFruit("mandarin");
// // false
// checkFruit("pear");
// // true
// checkFruit("Pear");
// // false
// checkFruit("apple");
// // true
// ==================================================================

// ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ

// Спільними елементами масивів називають ті елементи,
// які присутні у всіх масивах.

//  Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3]
// спільними будуть числа 3 і 5, оскільки вони присутні
// в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки
// в одному з масивів.

// Напиши функцію getCommonElements(array1, array2),
// яка отримує два масиви довільної довжини в параметри
// array1 і array2, і повертає новий масив, що складається
// з тих елементів, які присутні в обох вихідних масивах.
// -----------------------------------------------------------------

// 1) for...of

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const commonElements = [];

//     for (const element of array1) {
//         // console.log(element);

//         if (array2.includes(element)) {
//             commonElements.push(element);
//         }
//     }
//     // console.log(element);
//     console.log(commonElements);

//     return commonElements;

//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]);
// // []

// ----------------------------------

// 2) for

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     const commonElements = [];

//     for (let i = 0;  i < array1.length; i += 1) {

//         if (array2.includes(array1[i])) {
//             commonElements.push(array1[i]);
//         }
//     }
//     // console.log(element);
//     console.log(commonElements);

//     return commonElements;

//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]);
// // []
// ===================================================================

// ЗАДАЧА: ПАРНІ ЧИСЛА

// Напиши функцію getEvenNumbers(start, end), яка повертає масив
// усіх парних чисел від start до end.Парним вважається число,
// яке ділиться на 2 без остачі(10 % 2 === 0).
// --------------------------------------------------------

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {
// console.log(i);

//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }

//     console.log(evenNumbers);

//     return evenNumbers;

//     // Change code above this line
//   }

// getEvenNumbers(2, 5);
// // [2, 4]
// getEvenNumbers(3, 11);
// // [4, 6, 8, 10]
// getEvenNumbers(6, 12);
// // [6, 8, 10, 12]
// getEvenNumbers(8, 8);
// // [8]
// getEvenNumbers(7, 7);
// // []
// =========================================================

// BREAK

// Доповни код таким чином, щоб у змінну number записувалося
// перше число від start до end, яке ділиться на 5 без остачі.
// --------------------------------------------------------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// - Оголошена змінна start зі значенням 6
// - Оголошена змінна end зі значенням 27
// - Оголошена змінна number без ініціалізації
// - Підсумкове значення змінної number дорівнює 10
// - В циклі for використовується break для виходу до
//   завершення усіх ітерацій циклу
// =============================================================

// ОПЕРАТОР BREAK VS RETURN У ФУНКЦІЇ

// Виконай рефакторинг функції findNumber(start, end, divisor)
// таким чином, щоб вона: повертала перше число від start до end,
// яке ділиться на divisor без остачі не використала оператор break
// не використала змінну number
// ------------------------------------------------------------

// function findNumber(start, end, divisor) {
// 	// Change code below this line
// 	let number;
// 	for (let i = start; i < end; i += 1) {
// 		if (i % divisor === 0) {
// 			number = i;
// 			return number;
// 		}
// 	}
// 	// Change code above this line
// }

// findNumber(2, 6, 5);
// // 5
// findNumber(8, 17, 3);
// // 9
// findNumber(6, 9, 4);
// // 8
// findNumber(16, 35, 7);
// // 21
// ===========================================================

// ЗАДАЧА: ФУНКЦІЯ INCLUDES()

// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє,
// чи присутнє в масиві array значення value, повертаючи true,
// якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes()
// не можна використовувати метод масив.includes(значення).
// ----------------------------------------------------------------

// function includes(array, value) {
//   // Change code below this line
//     let result = false;

//     for (const element of array) {
//         // console.log(array);
//         if (value === element) {
//             result = true;
//             console.log(result);
//             return result;

//         }
//     }
// console.log(result);
//     return result;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
// // true
// includes([1, 2, 3, 4, 5], 17);
// // false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// // true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// // false
// includes(["apple", "plum", "pear", "orange"], "plum");
// // true
// includes(["apple", "plum", "pear", "orange"], "kiwi");
// // false

// =======================================================================================
// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	location: {
// 		country: "Jamaica",
// 		city: "Ocho Rios",
// 	},
// 	hobbies: ["swiming", "music", "sci-fi"],
// };

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const lastHobbies = user.hobbies[user.hobbies.length - 1];
// console.log(lastHobbies); // "sci-fi"

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// console.log(aptRating); //
// const aptDescr = apartment["descr"];
// console.log(aptDescr); //
// const aptPrice = apartment["price"];
// console.log(aptPrice); //
// const aptTags = apartment["tags"];
// console.log(aptTags); //

// =========================================================================================

// ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо,
// але не обов'язково, цикл for...of.
// ------------------------------------------------------------------------------------------
// function countProps(object) {
// 	// Change code below this line
// 	let propCount = Object.keys(object).length;

// 	console.log(propCount);
// 	return propCount;
// 	// Change code above this line
// }

// countProps({});
// // 0
// countProps({ name: "Mango", age: 2 });
// // 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// // 3

// =====================================================================================

// ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості -
// це ім'я співробітника, а значення властивості - це зарплата. Функція повинна
// розрахувати загальну суму зарплат співробітників і повернути її.Використовуй
// змінну totalSalary для зберігання загальної суми зарплати.
// ----------------------------------------------------------------------------------
// function countTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	// Change code below this line

// 	const values = Object.values(salaries);

// 	for (const value of values) {
// 		totalSalary += value;
// 	}

// 	console.log(totalSalary);
// 	// Change code above this line
// 	return totalSalary;
// }

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта
// =============================================================================================

// ЗАДАЧА. КАРТКИ ЗАВДАНЬ

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній
// локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority,
// можуть бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях category і priority
// повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.
// -------------------------------------------------------------------------------------------------
// function makeTask(data) {
// 	const completed = false;
// 	const category = "General";
// 	const priority = "Normal";
// 	// Change code below this line
// 	const task = { category, priority, ...data, completed };

// 	return task;
// 	// Change code above this line
// }

// - Оголошена функція makeTask(data)
// - Виклик makeTask({}) повертає { category: "General", priority: "Normal", completed: false }
// - Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// - Виклик makeTask({ category: "Finance", text: "Take interest" }) повертає {
//   category: "Finance",
//   priority: "Normal", text: "Take interest", completed: false
// }
// - Виклик makeTask({ priority: "Low", text: "Choose shampoo" }) повертає
// { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// - Виклик makeTask({ text: "Buy bread" }) повертає
// { category: "General", priority: "Normal", text: "Buy bread", completed: false }
// ================================================================================================

// ЗАДАЧА.КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для
// ведення інвентарю - додавання, видалення, пошуку та оновлення зілля.
// Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// -----------------------------------------------------------------------------------------------

// const atTheOldToad = {
// 	// Change code below this line

// 	potions: [],

// 	// Change code above this line
// };

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив []
// ================================================================================================

// ЗАДАЧА.ОТРИМУЄМО ВСЕ ЗІЛЛЯ

// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// --------------------------------------------------------------------------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
// },
//   // Change code above this line
// };

// - Оголошена змінна atTheOldToad
// - Значення змінної atTheOldToad - це об'єкт
// - Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// - Значення властивості atTheOldToad.getPotions - це метод об'єкта
// - Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]
// ====================================================================================================

// ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець
// масиву зілля у властивості potions.
// --------------------------------------------------------------------------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// - Оголошена змінна atTheOldToad
// - Значення змінної atTheOldToad - це об'єкт
// - Значення властивості atTheOldToad.potions - це масив
//      ["Speed potion", "Dragon breath", "Stone skin"]
// - Значення властивості atTheOldToad.addPotion - це метод об'єкта
// - Після першого виклику методу atTheOldToad.addPotion("Invisibility"),
//      у властивості potions буде масив["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// - Після другого виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions
//      буде масив["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
// ===================================================================================================

// ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ

// Доповни метод removePotion(potionName) таким чином, щоб він видаляв
// зілля potionName з масиву зілля у властивості potions.
// ---------------------------------------------------------------------------------------------------

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	removePotion(potionName) {
// 		// Change code below this line
// 		const potionsIndex = this.potions.indexOf(potionName);
// 		this.potions.splice(potionsIndex, 1);

// 		// Change code above this line
// 	},
// };

// - Оголошена змінна atTheOldToad
// - Значення змінної atTheOldToad - це об'єкт
// - Значення властивості atTheOldToad.potions - це масив
//      ["Speed potion", "Dragon breath", "Stone skin"]
// - Значення властивості atTheOldToad.removePotion - це метод об'єкта
// - Після першого виклику методу atTheOldToad.removePotion("Dragon breath"),
//     у властивості potions буде масив["Speed potion", Stone skin"]
// - Після другого виклику методу atTheOldToad.removePotion("Speed potion"),
//     у властивості potions буде масив["Stone skin"]
// ===================================================================================================

// ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ

// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював
// назву зілля з oldName на newName в масиві зілля у властивості potions.
// -------------------------------------------------------------------------------------------------

// const atTheOldToad = {
// 	potions: ["Speed potion", "Dragon breath", "Stone skin"],
// 	updatePotionName(oldName, newName) {
// 		// Change code below this line
// 		const findPotions = this.potions.indexOf(oldName);
// 		this.potions.splice(findPotions, 1, newName);

// 		// Change code above this line
// 	},
// };

// - Оголошена змінна atTheOldToad
// - Значення змінної atTheOldToad - це об'єкт
// - Значення властивості atTheOldToad.potions - це масив
//      ["Speed potion", "Dragon breath", "Stone skin"]
// - Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// - Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
//     у властивості potions буде масив["Speed potion", "Polymorth", "Stone skin"]
// - Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
//     у властивості potions буде масив["Speed potion", "Polymorth", "Invisibility"]
// ==================================================================================================

// ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною,
// а в майбутньому, можливо, й іншими характеристиками.Тому зараз у властивості potions
// буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали
// не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions,
// але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості
// potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою
// oldName на newName в масиві potions.
// --------------------------------------------------------------------------------------------------

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},
// 	addPotion(newPotion) {
// 		for (const potion of this.potions) {
// 			if (potion.name === newPotion.name) {
// 				return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 			}
// 		}

// 		this.potions.push(newPotion);
// 	},

// 	removePotion(potionName) {
// 		// for (const potion of this.potions) {
// 		//   const potionNameIndex = this.potions[potion[potionName]];
// 		//   console.log(potionNameIndex);
// 		// }

// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (potionName === this.potions[i].name) {
// 				this.potions.splice(i, 1);
// 			}
// 		}

// 		return `Potion ${potionName} is not in inventory!`;
// 	},
// 	updatePotionName(oldName, newName) {
// 		for (const potion of this.potions) {
// 			if (potion.name === oldName) {
// 				potion.name = newName;
// 			}
// 		}
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// 	// Change code above this line
// };

// - Оголошена змінна atTheOldToad
// - Значення змінної atTheOldToad - це об'єкт
// - Значення властивості atTheOldToad.getPotions - це метод об'єкта
// - Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає
// [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
// { name: "Stone skin", price: 520 }]
// - Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// - Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
// в масиві potions останнім елементом буде цей об'єкт
// - Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
// в масиві potions останнім елементом буде цей об'єкт
// - Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного
// коду.
// - Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
//     - Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
// масив potions не змінюється
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.table(atTheOldToad.potions);
//     - Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
// массив potions не змінюється
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.table(atTheOldToad.potions);
//     - Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
// повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.table(atTheOldToad.potions);
//     - Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
// повертає рядок "Error! Potion Stone skin is already in your inventory!"
// - Значення властивості atTheOldToad.removePotion - це метод об'єкта
//     - Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"),
// у властивості potions буде масив[{ name: "Speed potion", price: 460 }, {
//     name: "Stone skin",
//     price: 520
// }]
// atTheOldToad.removePotion("Dragon breath");
// console.table(atTheOldToad.potions);
//     - Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"),
// у властивості potions буде масив[{ name: "Dragon breath", price: 780 }, {
//     name: "Stone skin",
//     price: 520
// }]
// - Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
//     - Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath",
// "Polymorth"), у властивості potions буде масив[{ name: "Speed potion", price: 460 },
//     { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
//     - Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin",
// "Invulnerability potion"), у властивості potions буде масив[{ name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]
// =================================================================================================

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		return this.potions;
// 	},

// 	addPotion(newPotion) {
// 		for (const potion of this.potions) {
// 			if (potion.name === newPotion.name) {
// 				return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 			}
// 		}
// 		this.potions.push(newPotion);
// 	},

// 	removePotion(potionName) {
// 		for (let i = 0; i < this.potions.length; i++) {
// 			if (this.potions[i].name === potionName) {
// 				this.potions.splice(i, 1);
// 				return;
// 			}
// 		}
// 		return `Potion ${potionName} is not in inventory!`;
// 	},

// 	updatePotionName(oldName, newName) {
// 		for (const potion of this.potions) {
// 			if (potion.name === oldName) {
// 				potion.name = newName;
// 			}
// 		}
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// 	// Change code above this line
// };

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.removePotion("Dragon breath"));
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.removePotion("Speed potion"));
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(
// 	atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
// // ==========================================================================
// const calculator = {
// 	read(a, b) {
// 		(this.x = a), (this.y = b);
// 	},

// 	sum() {
// 		return this.x + this.y;
// 	},

// 	mult() {
// 		return this.x * this.y;
// 	},
// };

// // const sum = () => calculator.x + calculator.y;

// calculator.read(10, 5);
// console.log(calculator.sum());
// console.log(calculator.mult());

// console.log(calculator.x, calculator.y);
// console.log(calculator.sum());
// console.log(calculator.mult());
// ===========================================================================
// Декілька колбеків
// ----------------------------------------------------------------------------
// Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг методу
// order таким чином, щоб він приймав другим і третім параметром два колбеки
// onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onError,
//     передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы>
//         in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onSuccess,
//         передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів.
// Будь ласка, нічого там не міняй.
// ------------------------------------------------------------------------------------
// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],
// 	order(pizzaName, onSuccess, onError) {
// 		if (!this.pizzas.includes(pizzaName)) {
// 			return onError(
// 				`There is no pizza with a name ${pizzaName} in the assortment.`
// 			);
// 			console.log();
// 		}
// 		return onSuccess(pizzaName);
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

// pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));

// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));

// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// ================================================================================
// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line
// 	orderedItems.forEach(function (item) {
// 		totalPrice += item;
// 	});

// 	// Change code above this line
// 	return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138

// calculateTotalPrice([164, 48, 291]);
// console.log(calculateTotalPrice([164, 48, 291])); //503

// calculateTotalPrice([412, 371, 94, 63, 176]);
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// Попробувати переробити на стрілочну функцію
// ---------------------------------------------------------------------------
// function calculateTotalPrice(orderedItems) {
// 	let totalPrice = 0;
// 	// Change code below this line
// 	orderedItems.forEach((item) => (totalPrice += item));

// 	// Change code above this line
// 	return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138

// calculateTotalPrice([164, 48, 291]);
// console.log(calculateTotalPrice([164, 48, 291])); //503

// calculateTotalPrice([412, 371, 94, 63, 176]);
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// =================================================================================
// function changeEven(numbers, value) {
// 	// Change code below this line
// 	const newArray = [];

// 	numbers.forEach((number) => {
// 		number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
// 	});

// 	return newArray;
// 	// Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]

// changeEven([2, 8, 3, 7, 4, 6], 10);
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]

// changeEven([17, 24, 68, 31, 42], 100);
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]

// changeEven([44, 13, 81, 92, 36, 54], 100);
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[144, 13, 81, 192, 136, 154]
// ================================================================================
// const students = [
// 	{ name: "Mango", courses: ["mathematics", "physics"] },
// 	{ name: "Poly", courses: ["science", "mathematics"] },
// 	{ name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map((student) => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap((student) => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// const genres = books.flatMap(book => book.genres)
// console.log(genres); //[ "adventure", "history", "fiction", "horror", "mysticism" ]

// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ];
// const getUserNames = (users) => users.map((user) => user.name);
// // Change code above this line
// console.log(getUserNames(users)); //["Moore Hensley", "Sharlene Bush", "Ross Vazquez",
// // "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// ===================================================================

// const hours = 28;
// // const b = 180;

// if (hours < 17) console.log("Pending")
// else if (hours >= 17 && hours < 22) console.log("Expires");
// else if (hours >= 22 && hours < 24) console.log("Expires_2");
// else if (hours >= 22 && hours < 24) console.log("Expires_2");
// else console.log("Overdue")
// ==========================================================

