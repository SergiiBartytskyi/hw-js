// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і виводить значення 
// кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const btnEl = document.querySelector('.change-color');
console.log(btnEl);

const spanEl = document.querySelector('.color');
console.log(spanEl);

btnEl.addEventListener('click', (e) => {
  const body = document.body;
  body.style.backgroundColor = getRandomHexColor();

  // spanEl.textContent = body.style.backgroundColor;
  spanEl.textContent = getRandomHexColor();

})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
