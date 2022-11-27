const decrementEl = document.querySelector('button[data-action="decrement"]');
console.log(decrementEl);

const incrementEl = document.querySelector('button[data-action="increment"]');
console.log(incrementEl);

const spanEl = document.querySelector('#value');
console.log(spanEl);

decrementEl.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick () {
    // console.log("Click  по кнопці");
    spanEl.addEventListener('value', () => {
        value += 1;
    })
}

incrementEl.removeEventListener('click', onTargetButtonClick)