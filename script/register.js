import validation from './module/validate.js'
import api from './module/requestapi.js'

// #region event listener
const inputEmail = document.getElementById('inputEmail')
const warningInputEmail = document.getElementById('warningInputEmail')
inputEmail.addEventListener('keyup', function(){
    fnValidationEmail(inputEmail.value, warningInputEmail)
})

const inputUsername = document.getElementById('inputUsername')
const warningInputUsername = document.getElementById('warningInputUsername')
inputUsername.addEventListener('keyup', function(){
    fnValidationUsername(inputUsername.value, warningInputUsername)
})

const inputPassword = document.getElementById('inputPassword')
const warningInputPassword = document.getElementById('warningInputPassword')
inputPassword.addEventListener('keyup', function(){
    fnValidationPassword(inputPassword.value, warningInputPassword)
})

const inputConfirmPassword = document.getElementById('inputConfirmPassword')
const warningInputConfirmPassword = document.getElementById('warningInputConfirmPassword')
inputConfirmPassword.addEventListener('keyup', function(){
    fnValidationConfirmPassword(inputPassword.value, inputConfirmPassword.value, warningInputConfirmPassword)
})

const btnRegister = document.getElementById('btnRegister')
btnRegister.addEventListener('click', async function(e){
    e.preventDefault()
    /* 1. validate */
    const { isValidEmail } = fnValidationEmail(inputEmail.value, warningInputEmail)
    const { isValidUsername } = fnValidationUsername(inputUsername.value, warningInputUsername)
    const { isValidPassword } = fnValidationPassword(inputPassword.value, warningInputPassword)
    const { isValidConfirmPassword } = fnValidationConfirmPassword(inputPassword.value, inputConfirmPassword.value, warningInputConfirmPassword)
    const isValidForm = isValidEmail && isValidUsername && isValidPassword && isValidConfirmPassword
    
    /* 2. Is this email registered ? */
    const isEmailNeverUsed = await fnCheckIsEmailRegistered(inputEmail.value) 

    /* 3. alert message */
    fnAlertMessage(isValidForm, isEmailNeverUsed)
})

// #endregion

function fnValidationEmail(email, warningInputEmail) {
    const isValidEmail = validation.fnValidationEmail(email)
    validation.fnShowTextWarning(isValidEmail, warningInputEmail)
    return isValidEmail
}

function fnValidationUsername(username, warningInputUsername) {
    const isValidUsername = validation.fnValidationUsername(username)
    validation.fnShowTextWarning(isValidUsername, warningInputUsername)
    return isValidUsername
}

function fnValidationPassword(password, warningInputPassword) {
    const isValidPassword = validation.fnValidationPassword(password)
    validation.fnShowTextWarning(isValidPassword, warningInputPassword)
    return isValidPassword
}

function fnValidationConfirmPassword(password, confirmpassword, warningInputConfirmPassword) {
    const isValidConfirmPassword = (password == confirmpassword)
    validation.fnShowTextWarning(isValidConfirmPassword, warningInputConfirmPassword)
    return isValidConfirmPassword
}

async function fnCheckIsEmailRegistered(email) {
    const endpoint = 'http://127.0.0.1:3000/api/login/fnRegister'
    const json = {
        username: email
    }
    await api.fnJQueryPostApi(endpoint, json)
}

function fnAlertMessage(isValidForm, isEmailNeverUsed) {
    let msg = ''
    if (isValidForm && isEmailNeverUsed) {
        msg = "Register Complete"
    } else {
        msg = "Register Incomplete"
    }

    const alertMessage = document.getElementById('alertMessage')
    alertMessage.innerText = msg

    const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    exampleModal.show()
}