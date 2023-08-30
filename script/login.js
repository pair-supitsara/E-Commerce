import api from './module/requestapi.js'
import validate from './module/validate.js'
import modal from './module/modal.js'

// #region event listener
const backdrop = document.getElementById("backdrop")
const alertModal = document.getElementById("alertModal")
backdrop.addEventListener('click', function(event){
    if(!event.target.closest('.card') // click backdrop always close modal
        || event.target.closest('.x-square-icon')) { // click [x] always close modal
        modal.fnHideModal(backdrop)
    }
})

const btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener('click', async function(event){
    event.preventDefault()
    const inputEmailLogin = document.getElementById("inputEmailLogin").value
    const inputPasswordLogin = document.getElementById("inputPasswordLogin").value
    await fnAuthen(inputEmailLogin, inputPasswordLogin)
})

// #endregion
async function fnAuthen(email, password) {
    const alertMsg = document.getElementById("alertMsg")

    const isValidEmail = validate.fnValidationEmail(email)
    let msg = ""
    if(!isValidEmail) {
        msg += `<li style="margin-left: 35px;">email</li>`
    }
    const isValidPassword = validate.fnValidationPassword(password)

    if(!isValidPassword) {
        msg += `<li style="margin-left: 35px;">password</li>`
        console.log(msg)
    }
    if(msg.length > 0) {
        alertMsg.innerHTML = `  <div style="">Please enter valid following</div>
                                <ul style="">${msg}</ul>`
        modal.fnShowmodal(backdrop, alertModal, 'visible')
    } else {
        const json = {
            email: email,
            password: password
        }
        const response = await api.fnfetchPostApi("/authen/fnLogin", json)
        console.log(response)
    }

}