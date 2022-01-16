const inputRef = document.querySelector('input')
const buttonCreateRef = document.querySelector('[data-create]')
const buttonResetRef = document.querySelector('[data-destroy]')
const boxRef = document.querySelector('#boxes')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
    amount = inputRef.value
    const divArray = []
    for (let i = 0; i < amount; i++) {
        let widthHight = 30 + i * 10
        const element = document.createElement('div')
        element.classList.add('newDiv')
        element.setAttribute('style', `width:${widthHight}px; height:${widthHight}px; background-color:${getRandomHexColor()}`)
        divArray.push(element)
    }
    boxRef.append(...divArray)

}

function destroyBoxes() {
    const itemsForKill = document.querySelectorAll('newDiv')
    boxRef.remove(...itemsForKill)
}


buttonCreateRef.addEventListener('click', createBoxes)
buttonResetRef.addEventListener('click', destroyBoxes)