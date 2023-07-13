import validation from './module/validate.js'
import api from './module/requestapi.js'

// #region event listener

const inputEmail = document.getElementById('inputEmail')
const warningInputEmail = document.getElementById('warningInputEmail')
inputEmail.addEventListener('keyup', function(){
    const isCorrect = validation.fnValidationEmail(inputEmail.value)
    validation.fnShowTextWarning(isCorrect, warningInputEmail)
})

const inputUsername = document.getElementById('inputUsername')
const warningInputUsername = document.getElementById('warningInputUsername')
inputUsername.addEventListener('keyup', function(){
    const isCorrect = validation.fnValidationUsername(inputUsername.value)
    validation.fnShowTextWarning(isCorrect, warningInputUsername)
})

const inputPassword = document.getElementById('inputPassword')
const warningInputPassword = document.getElementById('warningInputPassword')
inputPassword.addEventListener('keyup', function(){
    const isCorrect = validation.fnValidationPassword(inputPassword.value)
    validation.fnShowTextWarning(isCorrect, warningInputPassword)
})

const inputConfirmPassword = document.getElementById('inputConfirmPassword')
const warningInputConfirmPassword = document.getElementById('warningInputConfirmPassword')
inputConfirmPassword.addEventListener('keyup', function(){
    const bool = (inputPassword.value == inputConfirmPassword.value)
    validation.fnShowTextWarning(bool, warningInputConfirmPassword)
})

const btnRegister = document.getElementById('btnRegister')

btnRegister.addEventListener('click', async function(e){
    e.preventDefault()
    /* 1. */
    const countValidInput = document.getElementsByClassName('d-none').length
    const countTotalInput = document.getElementsByClassName('warning').length
    const isValidForm = (countValidInput == countTotalInput)
    /* 2. */
    const isEmptyForm = fnCheckFormEmpty()
    /* 3. */
    const endpoint = 'http://127.0.0.1:3000/api/demo/fnDemo'
    const json = {
        username: inputUsername.value
    }
    const statusFormServer = await api.fnJQueryPostApi(endpoint, json)
    console.log(statusFormServer)

    let textAlert = ''
    if (isValidForm && isEmptyForm && statusFormServer) {
        textAlert = "Register Complete"
    } else {
        textAlert = "Register Incomplete"
    }

    const alertMessage = document.getElementById('alertMessage')
    alertMessage.innerText = textAlert
    const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    exampleModal.show()
})

// #endregion

function fnCheckFormEmpty(){
    const isEmailEmpty = validation.fnValidationInputEmpty(inputEmail)
    if (isEmailEmpty) {
        return false // 'email is empty'
    }
    const isUsernameEmpty = validation.fnValidationInputEmpty(inputUsername)
    if (isEmailEmpty) {
        return false // 'username is empty'
    }
    const isPasswordEmpty = validation.fnValidationInputEmpty(warningInputPassword)
    if (isPasswordEmpty) {
        return false // 'password is empty'
    }
    const isConfirmPasswordEmpty = validation.fnValidationInputEmpty(inputConfirmPassword)
    if (isPasswordEmpty) {
        return false // 'confirm-password is empty'
    }
    return true
}

