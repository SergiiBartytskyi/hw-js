function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
// console.log(createBtn);
const destroyBtn = document.querySelector("button[data-destroy]");
// console.log(destroyBtn);
const inputEl = document.querySelector("input");
// console.log(inputEl);
let initialValue = 30;

const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const boxes = Number(inputEl.value);
  const arrayOfBoxes = [];

  for (let i = 0; i < boxes; i += 1) {
    const divEl = document.createElement('div');
    const currentValue = initialValue + i *10;

    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${currentValue}px`;
    divEl.style.height = `${currentValue}px`;
    arrayOfBoxes.push(divEl);

  }

  boxesEl.append(...arrayOfBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
