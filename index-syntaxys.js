// const shouldRenew = confirm("Продовжити підписку?");
// console.log(shouldRenew);

// Number=================================================================

// Піднести до степеня

// let base = prompt("Введи число");
// base = Number(base);
// // console.log(typeof base);
// console.log(base);

// let power = prompt("Введи степінь");
// power = Number(power);
// // console.log(typeof power);
// console.log(power);

// let result;
// result = Math.pow(base, power);
// console.log(result);

// Рандом від 1 до 100

// const max = 100;
// const min = 1;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// Зміна кольору фону документа

// const colors = [
// 	"tomato",
// 	"teal",
// 	"orange",
// 	"deeppink",
// 	"skyblue",
// 	"green",
// 	"yellow",
// 	"brown",
// ];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// Strings==================================================================

// Довжина рядка

// const message = "В цьому рядку 26 символів.";
// console.log(message.length);

// Конкатенація рядків (зшивання)

// const firstName = "Sergii";
// const lastName = "Bartytskyi";
// const fullName = firstName + " " + lastName;

// console.log(fullName);

// Задача============================================

// Написати скрипт, який виведе рядок у форматі:
// "Гість x y заселяється в z номер q.",
// поставити замысть x y z q значення змінних

// const firstName = "Sergii";
// const lastName = "Bartytskyi";
// const room = "777";
// const type = "VIP";

// // const message =
// // 	"Гість " +
// // 	firstName +
// // 	" " +
// // 	lastName +
// // 	" заселяється в " +
// // 	type +
// // 	" номер " +
// // 	room +
// // 	".";

// const message = `Гість ${firstName} ${lastName} заселяється в ${type} номер ${room}.`;

// console.log(message);

// Нормалізація з методом toLowerCase()

// let brand = "Samsung";
// brand = brand.toLowerCase();

// console.log(brand.slice(3).toUpperCase()); метод slice
// brand = brand[0].toLowerCase() + brand.slice(1).toUpperCase(); перша мала, а інші великі
// console.log(brand);

// Пошук в рядку із методом includes()

// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 = "Привіт, це не spam!";
// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// const string2 = "Найбільша Sale року. Не пропусти!";
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord1));
// console.log(normalizedString2.includes(blacklistedWord2));

// const string3 = "Hello, World!";
// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// console.log(true > 0);
// console.log(Number(true));

// Задача==================== Логічні оператори ============

// Напиши скрипт який перевіряє входження числа у відрізок х1 і х2

// - до х1
// - після х2
// - від х1 до х2
// - до х1 і після х2

// const x1 = 10;
// const x2 = 50;
// const number = 9;

// console.log(`Число ${number} входить у відрізок до ${x1}`, number < x1);
// console.log(`Число ${number} входить у відрізок після ${x2}`, number > x2);

// const res1 = number > x1 && number < x2;
// console.log(`Число ${number} входить у відрізок після ${x1} і до ${x2}`, res1);

// const res2 = number < x1 || number > x2;
// console.log(`Число ${number} входить у відрізок до ${x1} і після ${x2}`, res2);

// Задача==================== Логічні оператори ============

// Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
// Для цього користувач повинен бути:
// - другом
// - онлайн
// - без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log("Можна відкрити чат?", canOpenChat);

// Задача==================== Логічні оператори ============

// Напиши скрипт перевірки підписки користувача для доступу до контенту.
// Є три типи підписки: free, pro і vip.
// Доступ є у користувачів pro і vip.

// const subscriprion = "vip";

// const canAccessContent = subscriprion === "pro" || subscriprion === "vip";

// console.log("Є доступ до контунту?", canAccessContent);

// Тернарний оператор

// const balance = 100;

// let message;
// if (balance >= 0) {
// 	message = "Позитивний баланс";
// } else {
// 	message = "Негативний баланс";
// }

// //2) const message = balance >= 0 ? "Позитивний баланс" : "Негативний баланс";

// console.log(message);

// Задача==================== if...else ============

// Напиши скрипт обробки покупки в магазині
// - баланс користувача зберігається у змінній balance
// - сума покупки зберігається у зміннй payments

// -перед перевіркою вивести повідомлення:
// "Загальна сума замовлення [число] кредитів. Перевіряємо кількість доступних коштів на рахунку."

// - Якщо сума покупки не перевищує баланс:
//   - вирахувати із балансу суму покупки;
//   - вивести повідомлення: "На рахунку залишилось [число] кредитів."
// - Якщо сума покупки перевищує баланс:
//   - вивести повідомлення: "На рахунку недостатньо коштів для проведення операції!"
// - В кінці вивести повідомлення :"Операція завершена!"

// // 1.Змінні
// let balance = 10000;
// const payments = 2000;

// console.log(
// 	`Загальна сума замовлення ${payments} кредитів. Перевіряємо кількість доступних коштів на рахунку.`
// );

// // 2. Сума менша, ніж баланс
// if (balance >= payments) {
// 	console.log("Операція пройшла успішно. Дякуємо за покупку!");
// 	balance -= payments;
// 	console.log(`На рахунку залишилось ${balance} кредитів.`);
// } else {
// 	console.log("На рахунку недостатньо коштів для проведення операції!");
// }

// // 3. Виводим на консоль
// console.log("Операція завершена!");

// Задача==================== if...else ============

// Напиши скрипт підрахунку суми покупкизі знижкою в залежності від витраченої суми за весь час
// (партнерська програма)

// - Загальна сума витрачених коштів зерігається у змінній totalSpent
// - Сума поточного платежу зберігається у змінній payment
// - Знижка зберігається у змінній discont

// - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
// - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
// - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
// - Якщо витрачено менше 100) - не партнер, знижка 0%

// В кінці вивести повідомлення
// 'Оформляємо замовлення на суму [сума] зі знижкою [знижка]'

// // 1. Створити змінні
// let totalSpent = 5000;
// let payment = 500;
// let discont;

// // 2. Розбити суми потрачених коштів на дисконт
// if (totalSpent < 100) {
// 	console.log("для отримання знижки здійсни покупку на 100, знижка 0");
// 	discont = 0;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
// 	console.log("Бронзовий партнер, знижка 2 %");
// 	discont = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
// 	console.log("Срібний партнер, знижка 5%");
// 	discont = 0.05;
// } else {
// 	console.log("Золотий партнер, знижка 10%");
// 	discont = 0.1;
// }
// // 3. Розраховуємо знижку на товар
// payment = payment - payment * discont;
// // 4. Вивести повідомлення про операцію
// console.log(
// 	`Оформляємо замовлення на суму ${payment} зі знижкою ${discont * 100}%`
// );

// totalSpent += payment;

// console.log(`Загальна сума витрачена в магазині ${totalSpent}`);

// Задача==================== switch ============

// Напиши скрипт вибору опції доставки товарів
// Опції зберігаються в змінній option: 1 - самовивіз; 2 - кур'єр, 3 - пошта

// В змінній message записати повідомлення в залежності від опції
// - "Ви зможете забрати товар завтра з 12:00 у нашому офісі"
// - 'Кур'єр доставить замовлення завтра з 09:00 до 18:00'
// - "Посилка буде доставлена сьогодні"
// - "Вам перетелефонує менеджер"

// // 1. Зробити змінні
// const option = 4;
// let message = "";

// // 2. Зробити switch 1 2 3
// // 3. В кожному кейсі записати в меседж рядок
// switch (option) {
// 	case 1:
// 		message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
// 		break;

// 	case 2:
// 		message = "Кур'єр доставить замовлення завтра з 09:00 до 18:00";
// 		break;

// 	case 3:
// 		message = "Посилка буде доставлена сьогодні";
// 		break;

// 	default:
// 		message = "Вам перетелефонує менеджер";
// }

// // 4. Зробити лог message
// console.log(message);

// for=========================================

// for (let i = 0; i < 5; i += 1) {
// 	console.log(i);
// }

// Задача==================== for ============

// Напиши скрипт, який підраховує загальну суму зарплат працівників
// Кількість працівників зберігається у змінній employees
// Зарплата кожного працівнкиа це випадкове число від 500 до 5000
// Записати суму у змінну totalSolary і вивести у консоль

// // 1. Зробити змінні
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSolary = 0;

// // 2. Перебрати працівників у циклі
// for (let i = 1; i <= employees; i += 1) {
// 	// 3. Згенерувати випадкову зп
// 	const salary = Math.round(
// 		Math.random() * (maxSalary - minSalary) + minSalary
// 	);
// 	console.log(`ЗП працівника номер ${i} - ${salary}`);
// 	// 4. Додати до totalSolary
// 	totalSolary += salary;
// }

// // 5. Записати лог
// console.log("totalSalary: ", totalSolary);

// Задача==================== for ============

// Напиши скрипт, який підраховує суму всіх парних чисел, які входять
// у діапазон чисел у змінних від min до max
// Наприклад, якщо min=0 і max=5, то діапазон 0-5, і в ньому є два парних числа - 2 і 4
// і їх сума = 6

// 1-варіант--------------------------------------

// 1. Створити змінні
// const min = 6;
// const max = 13;
// let total = 0;

// // 2 for від min   до max  з кроком 1
// for (let i = min; i <= max; i += 1) {
// 	console.log(i);

// 	if (i % 2 === 0) {
// 		console.log("Парне: ", i);
// 		// 3. Перевіряємо остачу від ділення
// 		total += i;
// 	}
// }

// // 4. Записуємо суму
// console.log("total: ", total);

// 2-варіант--------------------------------------

//  1. Створити змінні
// const min = 0;
// const max = 13;
// let total = 0;

// // 2 for від min   до max  з кроком 1
// for (let i = min; i <= max; i += 1) {
// 	// 3. Перевіряємо остачу від ділення
// 	if (i % 2 !== 0) {
// 		console.log("Не парне: ", i);
// 		continue;
// 	}
// 	console.log("Парне: ", i);
// 	total += i;
// }

// // 4. Записуємо суму
// console.log("total: ", total);
