const decrementEl = document.querySelector('button[data-action="decrement"]');
// console.log(decrementEl);

const incrementEl = document.querySelector('button[data-action="increment"]');
// console.log(incrementEl);

const spanEl = document.querySelector('#value');
// console.log(spanEl);

// 1 варіант

// let counterValue = 0;

// decrementEl.addEventListener('click', () => {
//     counterValue -= 1;
//     spanEl.textContent = counterValue;
// });

// console.log(decrementEl);

// incrementEl.addEventListener('click', () => {
//     counterValue += 1;
//     spanEl.textContent = counterValue;
// });

// console.log(incrementEl);

//2 варіант

const counter = {
    value: 0,

    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    },
}

decrementEl.addEventListener('click', () => {
    counter.decrement();
    spanEl.textContent = counter.value;
});

incrementEl.addEventListener('click', () => {
    counter.increment();
    spanEl.textContent = counter.value;
});