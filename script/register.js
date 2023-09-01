import api from './module/requestapi.js'
import validate from './module/validate.js'
import modal from './module/modal.js'

const btnRegister = document.getElementById("btnRegister")
btnRegister.addEventListener('click', async function(event){
    event.preventDefault()
    const email = document.getElementById("inputEmailLogin").value
    const password = document.getElementById("inputPassword").value
    const confirmPassword = document.getElementById("inputConfirmPassword").value
    await fnRegister(email, password, confirmPassword)
})

// #endregion
async function fnRegister(email, password, confirmPassword) {
    const alertModal = document.getElementById("alertModal")
    const alertMsg = document.getElementById("alertMsg")
    const backdrop = document.getElementById("backdrop")
    
    const checkedEmail = validate.fnValidateEmail(email)
    const checkedPw = validate.fnValidatePassword(password)
    const checkedCfPw = validate.fnValidateConfirmPassword(password, confirmPassword)
    let msg = ''
    let isRegisterSucess = true
    if (!checkedEmail.isvalid) {
        isRegisterSucess &&= checkedEmail.isvalid
        for(let i=0 ; i<checkedEmail.message.length ; i++) {
            msg += `<li style="margin-left: 35px;">${checkedEmail.message[i]}</li>`
        }
    }
    if (!checkedPw.isvalid) {
        isRegisterSucess &&= checkedPw.isvalid
        for(let i=0 ; i<checkedEmail.message.length ; i++) {
            msg += `<li style="margin-left: 35px;">${checkedPw.message[i]}</li>`
        }
    }
    if (!checkedCfPw.isvalid) {
        isRegisterSucess &&= checkedCfPw.isvalid
        for(let i=0 ; i<checkedEmail.message.length ; i++) {
            msg += `<li style="margin-left: 35px;">${checkedCfPw.message[i]}</li>`
        }
    }
    if (isRegisterSucess) {
        alertMsg.innerHTML = `  <ul style="">
                                    Please enter valid following
                                    ${ msg }
                                </ul>`
        modal.fnShowmodal(backdrop, alertModal, 'visible')
    } else {
        const json = {
            email: email,
            password: password
        }
        const response = await api.fnfetchPostApi("/authen/fnRegister", json)
        console.log(response)
    }
}