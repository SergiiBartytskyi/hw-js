const decrementEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementEl);

const incrementEl = document.querySelector('button[data-action="increment"]');
console.log(incrementEl);

const spanEl = document.querySelector('#value');
console.log(spanEl);

decrementEl.addEventListener('click', () => {
    this.value -= 1;
    spanEl.textContent = this.value;
});

console.dir(decrementEl);


// incrementEl.removeEventListener('click', onTargetButtonClick)


// const counter = {
// 	value: 0,

// 	increment() {
// 		this.value += 1;
// 	},

// 	decrement() {
// 		this.value -= 1;
// 	},
// };

// const counterValue = document.querySelector("#value");
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// decrementBtn.addEventListener("click", function () {
// 	counter.decrement();
// 	counterValue.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
// 	counter.increment();
// 	counterValue.textContent = counter.value;
// });