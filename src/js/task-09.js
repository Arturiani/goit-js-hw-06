const buttonRef = document.querySelector('.change-color')
const colorNameRef = document.querySelector('.color')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleBgColorClick(event) {
    document.body.style.backgroundColor = getRandomHexColor()
    colorNameRef.textContent = getRandomHexColor()
}


buttonRef.addEventListener('click', handleBgColorClick)