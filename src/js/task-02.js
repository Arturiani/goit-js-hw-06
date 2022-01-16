const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const listEl = document.querySelector('ul')

const makeIngredients = elements => {
    return elements.map(element => {
        const itemEl = document.createElement('li')
        itemEl.textContent = element
        itemEl.classList.add('item')
        return itemEl
    })
}
const itemsArray = makeIngredients(ingredients)
listEl.append(...itemsArray)