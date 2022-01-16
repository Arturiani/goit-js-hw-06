const items = document.querySelectorAll('.item')

console.log(`Number of categories: ${items.length}`)

function nameAndItems(items) {
    for (const item of items) {
        const title = item.querySelector('h2')
        const itemsLi = item.querySelectorAll('li')
        console.log(`Category: ${title.textContent}`)
        console.log(`Elements: ${itemsLi.length}`)
    }
    return
}
nameAndItems(items)