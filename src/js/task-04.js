const minusOne = document.querySelector('[data-action="decrement"]')
const plusOne = document.querySelector('[data-action="increment"]')
const total = document.querySelector('#value')
let counterValue = 0


plusOne.addEventListener('click', () => {
    counterValue += 1
    total.textContent = counterValue;
})
minusOne.addEventListener('click', () => {
    counterValue -= 1
    total.textContent = counterValue;
})