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

const logins = ["sdfsdff", "iuoiretjksdf", "sdfsdfnn", "lpfgdkjhij"];

const logins2 = ["ghfgdh", "liuoitjsrty", "eqgdfbhki", "vkligdndgndgnh"];
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
 7. Напиши ф - ю filterNumbers(array[, number1, ...]), яка
// - першим аргументом приймає масив слів
// - після першого аргумента може бути довільне слово інших аргументів які будуть словами
// - функція повинна повернути новий масив, в якому будуть тільки ті аргументи починаючи з другого,
// для яких є аналог в оригінальному масиві
// ----------------------------------------------------------------------------------------