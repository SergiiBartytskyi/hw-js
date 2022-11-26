const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const cart = document.querySelector('#ingredients');
// console.log(cart);

// const elementItem = ingredients.map(ingredient => {
// const liEl = document.createElement('li');
// liEl.textContent = ingredient;
// liEl.classList.add('item');
// return liEl;
// });
// console.log(elementItem);


// cart.append(...elementItem);

// console.log(cart);

const makeCart = array => {
  return array.map(el => {
const newEl = document.createElement('li');
newEl.classList.add('item');
newEl.textContent = el;

return newEl;
  })
};

const cartEl = makeCart(ingredients);
// console.log(cartEl);

cart.append(...cartEl);
console.log(cart);
