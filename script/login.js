import api from './module/requestapi.js'
import validate from './module/validate.js'

// #region event listener
const btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener('click', async function(event){
    event.preventDefault()
    const inputEmailLogin = document.getElementById("inputEmailLogin").value
    const inputPasswordLogin = document.getElementById("inputPasswordLogin").value
    await fnAuthen(inputEmailLogin, inputPasswordLogin)
})

// #endregion
async function fnAuthen(email, password) {
    const isValidEmail = validate.fnValidationEmail(email)
    let msg = ""
    if(!isValidEmail) {
        msg += "isValidEmail"
    }
    const isValidPassword = validate.fnValidationPassword(password)
    if(!isValidPassword) {
        msg += "isValidPassword"
    }
    alert(msg)

    if(msg.length > 0) {

    } else {
        const json = {
            email: email,
            password: password
        }
        const response = await api.fnfetchPostApi("/authen/fnLogin", json)
        console.log(response)
    }

}