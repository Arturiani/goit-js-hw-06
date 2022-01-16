const formRef = document.querySelector('form')
const emailRef = document.querySelector('[name="email"]')
const passwordRef = document.querySelector('[name="password"]')
const buttonRef = document.querySelector('button')

formRef.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Enter your email and password!')
    } else {
        const formArray = {}
        formArray.email = emailRef.value
        formArray.password = passwordRef.value
        console.log(formArray)
        event.currentTarget.reset()
    }
}