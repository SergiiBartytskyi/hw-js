const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const outputEl = document.querySelector('#name-output');
console.log(outputEl);

inputEl.addEventListener('input', (e) => {
    outputEl.textContent = e.currentTarget.value;

    if (!e.currentTarget.value) {
        return outputEl.textContent = 'Anonymous';
    }
})