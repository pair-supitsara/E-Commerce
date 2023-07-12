import validation from '../validate.js'
console.log(validation.fnValidation('fd@fff.cf'))

const inputEmail = document.getElementById('inputEmail')
inputEmail.addEventListener('keyup', function(){
    const regex = /^(\w+\.)?\w+\@\w+\.\w+$/ // some.thing@gmail.com
    console.log(inputEmail.value)
    const bool = regex.test(inputEmail.value)
})

const inputUsername = document.getElementById('inputUsername')
inputUsername.addEventListener('keyup', function(){
    const regex = /([A-Za-z]+|[0-9]+){8,}/
    const bool = regex.test(inputUsername.value)
    console.log(bool)
})

const inputPassword = document.getElementById('inputPassword')
inputPassword.addEventListener('keyup', function(){
    const regex = /([A-Za-z]+|[0-9]+|[+*?^$.%!#_@\-\[\]{}()|]+){8,}/
    const bool = regex.test(inputPassword.value)
})

const inputConfirmPassword = document.getElementById('inputConfirmPassword')
inputConfirmPassword.addEventListener('keyup', function(){
    const bool = (inputPassword.value == inputConfirmPassword.value)
    
})

const btnRegister = document.getElementById('btnRegister')
btnRegister.addEventListener('click', function(){

})


