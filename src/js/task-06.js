const inputText = document.querySelector('input')

inputText.addEventListener('blur', (element) => {
    return element.currentTarget.value.length == inputText.getAttribute('data-length') ?
        inputText.setAttribute('class', 'valid') :
        inputText.setAttribute('class', 'invalid')
})