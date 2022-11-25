// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },

//     addBooks(newBook) {
//         this.books.push(newBook);
//     },

//     removeBooks(oldBook) {
//         this.books.splice(oldBook, 1);
//     },

//     refreshBooks(oldBook, newBook) {
//         this.books.splice(oldBook, 1, newBook);

//     }
//   };
  
//   // Перед крапкою знаходиться об'єкт bookShelf,
//   // тому, викликаючи метод, this буде зберігати посилання на нього.
//   bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f};
//   bookShelf.addBooks("Harry Potter");
//   bookShelf.getBooks(); 
//   bookShelf.removeBooks('The Last Kingdom'); 
//   bookShelf.getBooks(); 
//   bookShelf.addBooks('The Last Kingdom');
//   bookShelf.getBooks(); 
//   bookShelf.refreshBooks('Harry Potter', 'Pinocio'); 
//   bookShelf.getBooks(); 

// // метод hasOwnProperty()
// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";
  
//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

//   for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//        console.log(key);

//        console.log(dog[key]);
//     }
//     console.log(key);
//   }

//   console.log(dog.hasOwnProperty("legs"));
//   console.log(dog.hasOwnProperty("name"));

//Деструктуризація
// const {name, legs} = dog;

// console.log(name);
// console.log(legs);

// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// const greet = name => `Ласкаво просимо ${name}.`
// Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.
// console.log(greet("Сергій")); // Ласкаво просимо Манго.


// Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }
// Колбек-функція

// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

//Декілька колбеків
// function call(ab, onAvailible, onNotAvailible) {
//   const isAvailible = Math.random() > 0.5;

//   if (!isAvailible) {
//     onNotAvailible(ab);
//     return;
//   }

//   onAvailible(ab);
// }

// function noAv(name) {
//   console.log(`Абонент ${name} зайнятий`);
// }

// function av(name) {
//   console.log(`Зєдную з ${name}`);
// }

// call('Сергій', av, noAv);
// call('Сергій', av, noAv);
// call('Сергій', av, noAv);
// call('Сергій', av, noAv);
// call('Сергій', av, noAv);
// call('Сергій', av, noAv);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index, array) {
//   console.log(`В ${array} Індекс ${index}, значення ${number}`);
// });

// Стрілочна функція
// const greet = () => {
//   console.log("Привіт!");
// };
// const dirtyMultiply = (array, value) => {
//   // for (let i = 0; i < array.length; i += 1) {
//   //   array[i] = array[i] * value;
//   // }
//   array.forEach(element => {
//     element *= value;
//   });
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// console.log(dirtyMultiply);

// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// метод filter

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(({label}) => label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// console.log(colorPickerOptions.find(option => option.label === "blue"));
// console.log(colorPickerOptions.find(option => option.label === "pink"));
// console.log(colorPickerOptions.find(option => option.label === "white"));

// reduce() масив обєктів
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalScore = students.reduce((total, {score}) => {
// return total + score;
// }, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore);
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const totalLikes = tweets.reduce((total, {likes}) => total + likes, 0);
// console.log(totalLikes);

// // функція підрахунку лайків
// const countLikes = array => {
//   return array.reduce((totalLikes, {likes}) => totalLikes + likes, 0);
// };

// console.log(countLikes(tweets)); // 32
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log(tags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);