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

// 2) join
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// const string = friends.join(", ");
// console.log(friends);
// console.log(string);
