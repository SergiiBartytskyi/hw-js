// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
// 	console.log(clients[i]);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
// 	if (numbers[i] < threshold) {
// 		continue;
// 	}

// 	console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// console.log("35" + -"22");
// 13 - false
// 35-22 - true

// console.log("35" * "22");
// 770 - true

// console.log("558" + 22++);
// '581' -false
// Invalid left-hand side - true

// let userCounter = 0;
// let newUsers = userCounter++;
// console.log(newUsers);
// 1 - false
// 0 - true;

// console.log((!false && 11) || (18 && !""));
// 11 - true;

// let name = 0;
// console.log(name ?? "Без назви");
// 'Без назви' - false
// 0 - true;

// Примітивні типи (за замовчанням)====================================

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5
// // якщо задати b знову значення рівності, тоді йому присвоється нове значення
// b = a;
// console.log(b); // 10

// Метод split(delimiter)===================

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// Метод join(delimiter) ====================

// const words = ["JavaScript", "-", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
// 	console.log(`${fruit} is a red fruit!`);
// }

// Метод push()=====================

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop() ===========================

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// Метод slice() =============================

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// const friends = ["Mango", "Poly", "Ajax", "Kiwi"];
// friends[3] = "Bony";
// friends[2] = 123;
// console.table(friends);

// const a = [1, 2, 3];
// const b = a;

// console.log("a", a);
// console.log("b", b);

// b[0] = 9;

// console.log("a", a);
// console.log("b", b);

// Пошук останнього елемента в масиві =================================================================
// ======(щоб отримати доступ до індексу або змінити значення елемента)=================================

// const friends = ["Mango", "Poly", "Ajax", "Kiwi"];
// console.table(friends);
// const lastIndexFriends = friends.length - 1;
// console.table(lastIndexFriends);

// for (let i = 0; i <= lastIndexFriends; i += 1) {
// 	console.log(i);
// 	console.log(friends[i]);
// 	friends[i] += "-1";
// }
// console.table(friends);

// for...of=========================================================================================
// (якшо не потрібно індексу і змини значення  елемента; тут менше синтаксису)======================

// for (const friend of friends) {
// 	console.log(friend);
// }
// console.table(friends);

// Задачі===========================================================================

// 1. Підрахувати загальну суму покупок в корзині
// --------------------------------------------------------------------------------------------------

// const cart = [54, 28, 105, 70, 92, 17, 120];
// // 2. створити змінну total для циклу
// let total = 0;

// // 1. перебираємо масив
// // for (let i = 0; i < cart.length; i += 1) {
// // 	console.log(cart[i]);
// // 	// 3. кожен елемент приплюсувати до total
// // 	total += cart[i];
// // }
// // console.log("Total: ", total);
// //  або
// for (const value of cart) {
// 	total += value;
// }
// console.log("Total: ", total);

// 2. Написати скрипт, який підраховує суму всіх парних чисел в масиві
// --------------------------------------------------------------------------------------------------

// number % 2 === - парні; number % 2 !== - непарні ========================================

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1) змінна total
// let total = 0;
// // 2) перебрати масив
// for (const number of numbers) {
// 	console.log(number);
// 	// 3) на кожній ітерації перевірити на парність число
// 	if (number % 2 === 0) {
// 		console.log("Парне");
// 		// 4) якщо число парне додаємо до total
// 		total += number;
// 	}
// }
// console.log("Total: ", total);

// Логіка від оберненого

// 1) змінна total

// let total = 0;
// // 2) перебрати масив
// for (const number of numbers) {
// 	// 3) на кожній ітерації перевірити на не парність число
// 	if (number % 2 !== 0) {
// 		console.log("Цю ітерацію потрібно пропустити", number);
// 		continue;
// 	}
// 	console.log(`${number} - парне!`);
// 	// 4) якщо число парне додаємо до total
// 	total += number;
// }
// console.log("Total: ", total);

// 3. Написати скрпит пошуку логіну
// ------------------------------------------------------------------------------------------------

// - Якщо логіну немає вивести повідомлення "Користувач [логін] не знайдений";
// - Якщо знайшли логін, вивести повідомлення "Користувач [логін] знайдений"";

// - Спочатку через for;
// - Потім через for...of;
// - Логіка break;
// - Метод includes() з тернарним оператором

// 1) for

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = "";

// for (let i = 0; i < logins.length; i += 1) {
// 	const login = logins[i];

// 	console.log("Login: ", login);
// 	console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// 	if (login === loginToFind) {
// 		message = `Користувач ${loginToFind} знайдений`;
// 		break;
// 	}
// 	message = `Користувач ${loginToFind} не знайдений`;
// }
// console.log(message);

// 2) for (Логіка від оберненого)
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Користувач ${loginToFind} не знайдений`;

// for (let i = 0; i < logins.length; i += 1) {
// 	const login = logins[i];

// 	console.log("Login: ", login);
// 	console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// 	if (login === loginToFind) {
// 		message = `Користувач ${loginToFind} знайдений`;
// 		break;
// 	}
// }
// console.log(message);

// 3) for...of (Логіка від оберненого)

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Користувач ${loginToFind} не знайдений`;

// for (const login of logins) {
// 	console.log("Login: ", login);
// 	console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// 	if (login === loginToFind) {
// 		message = `Користувач ${loginToFind} знайдений`;
// 		break;
// 	}
// }
// console.log(message);

// 4) includes()

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message;

// logins.includes(loginToFind)
// 	? (message = `Користувач ${loginToFind} знайдений`)
// 	: (message = `Користувач ${loginToFind} не знайдений`);

// console.log(message);

// або

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";

// const message = logins.includes(loginToFind)
// 	? `Користувач ${loginToFind} знайдений`
// 	: `Користувач ${loginToFind} не знайдений`;

// console.log(message);

// 4. Написати скрипт пошуку самого маленького числа в масиві
// при умові, якщо унікальне не повториться
// -----------------------------------------------------------------------------------------------

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
// 	console.log(number);

// 	if (smallestNumber > number) {
// 		smallestNumber = number;
// 	}
// }
// console.log(`${smallestNumber}: `, smallestNumber);

// 2-варіант

// console.log(Math.min(...numbers));

// Пошук найбільшого числа

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
// 	console.log(number);

// 	if (biggestNumber < number) {
// 		biggestNumber = number;
// 	}
// }
// console.log(`${biggestNumber}: `, biggestNumber);

// 5. Написати скрипт, який об'єднує всі елементти масиву в один рядок
// - Елементів може бути будь яка кількість
// - Нехай елементи масиву будуть розділені комою
//     - спочатку через for
//     - потім через join()
// ---------------------------------------------------------------------------------------------------

// 1) for

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// for (const friend of friends) {
// 	string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// 2) join (зшиває масив)
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// const string = friends.join(", ");
// console.log(friends);
// console.log(string);

// =====================================================================================
// 6. Написати скрипт, який замінить регістр кожного символу в рядку на протилежний
// Наприклад, "JavaScript" на виході має бути "jAVAsCRIPT".

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);

// for (const letter of letters) {
// 	console.log(letter);

//  1) олдскул

// if (letter === letter.toLowerCase()) {
// 	console.log("Ця буква в нижньому регістрі!!! - ", letter);
// 	invertedString += letter.toUpperCase();
// } else {
// 	console.log("Ця буква у верхньому регістрі!!! - ", letter);
// 	invertedString += letter.toLowerCase();
// }
//  2) тернарний

// операція присвоєння
// 	invertedString +=
// 		// операція зрівняння
// 		letter === letter.toLowerCase()
// 			? // кейси (що куди писати)
// 			  letter.toUpperCase()
// 			: letter.toLowerCase();
// }
// console.log(invertedString);
// ==========================================================================
// 7. Робимо slack в url із назви статті (наприклад на dev.to),
// Заголовок статті складається тільки із букв і пробілів
// -----------------------------------------------------------------------------
// - нормалізуємо статтю
// - розбиваємо по словам
// - зшиваємо в рядок із розділювачами

// - Повинно вийти top-10-benefits-of-react-framework

// const title = "Top 10 benefits of React framework";

// 1) мій

// const words = title.split(" ");
// console.log(words);
// const string = words.join("-").toLowerCase();
// console.log(string);

// 2) олдскул

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");
// console.log(words);

// const slug = words.join("-");
// console.log(slug);

// 3) в один рядок

// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

// 8. Напиши скрипт, який рахує суму елементів двох масивів
// -------------------------------------------------------------------------------------------

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
// 	total += number;
// }
// console.log(total);
// ===========================================================================================
// 9. Працюємо з колекцією карточок в Trello
// - метод splice();
// - видалити;
// - добавити;
// - обновити;
// -----------------------------------------------------------------------------------------
// const cards = [
// 	"Карточка-1",
// 	"Карточка-2",
// 	"Карточка-3",
// 	"Карточка-4",
// 	"Карточка-5",
// ];
// 1)- видалити:
// cards.splice(2, 1);
// console.table(cards);

// 2) - добавити:
// cards.splice(2, 0, 1);
// console.table(cards);

// 3) - обновити:
// cards.splice(3, 1, "JS");
// console.table(cards);

// // 6. Видалити задубльовані елементи
// -------------------------------------------------------------------------------------------

// const names = ["Mango", "Poly", "Mango", "Kiwi", "Ajax", "Kiwi"];
// const res = [];

// for (let i = 0; i < names.length; i += 1) {
// 	console.table(names);
// 	if (res.includes(names[i])) continue;
// 	res.push(names[i]);
// }
// console.table(res);

// 7. Сортування масиву з циклом
// Написати скрипт сортування масиву рядків
// -----------------------------------------------------------------------------------------------

// const numbers = [1, 8, 4, 2, 9, 7, 5];
// for (let loop = 0; loop < numbers.length; loop += 1) {
// 	for (let i = 1; i < numbers.length - loop; i += 1) {
// 		const firstValue = numbers[i - 1];
// 		const secondValue = numbers[i];

// 		if (firstValue > secondValue) {
// 			numbers[i - 1] = secondValue;
// 			numbers[i] = firstValue;
// 		}
// 	}
// }
// console.table(numbers);

// сортування по першій букві елемента
// ----------------------------------------------------------------------------------------------------

// const langs = ["python", "javascript", "c==", "haskel", "php", "ruby"];
// for (let loop = 0; loop < langs.length; loop += 1) {
// 	console.log("LOOP: ", loop);

// 	for (let i = 1; i < langs.length - loop; i += 1) {
// 		console.log("i: ", i);
// 		const firstValue = langs[i - 1];
// 		const secondValue = langs[i];

// 		if (firstValue > secondValue) {
// 			langs[i - 1] = secondValue;
// 			langs[i] = firstValue;
// 		}
// 	}
// }
// console.table(langs);
//  ===================================================================================================

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
// 	console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// Поверенння значення

// function multiply(x, y, z) {
// 	console.log("Код до return виконується звичайним чином");
// 	// Повертаємо результат виразу множення
// 	return x + y + z;

// 	console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550
// -------------------------------------------------------------------------------------------------
// Чому у прикладі на картинці починається все з foo(), а не function bar()?
// function bar() {
// 	console.log("bar");
// }

// function baz() {
// 	console.log("baz");
// }

// function foo() {
// 	console.log("foo");
// 	baz();
// 	bar();
// }

// foo();
// -----------------------------------------------------------------------------------------------------
// замикання функції

// function counter() {
// 	let count = 0;

// 	return function () {
// 		count += 1;
// 		return count;
// 	};
// }

// const pageCounter = counter();

// console.log(pageCounter);
// console.log(pageCounter);

// console.log(pageCounter);

// ==========================================================================================

// факторіал числа
// const x = 7;
// let result = 1;
// for (let i = 1; i <= x; i += 1) {
// 	result *= i;
// }
// console.log(result);

// function factorial(x) {
// 	if (x === 1) return 1;

// 	return x * factorial(x - 1);
// }
// const value = factorial(5);

// console.log(value);
