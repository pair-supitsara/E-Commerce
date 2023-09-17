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

    const checkedEmail = validate.fnValidateEmail(email)
    let errorMsg = ""
    if(!checkedEmail.isvalid) {
        for(let i=0 ; i<checkedEmail.message.length ; i++) {
            errorMsg += `<li style="margin-left: 35px;">${checkedEmail.message[i]}</li>`
        }
    }
    const checkedPw = validate.fnValidatePassword(password)
    if(!checkedPw.isvalid) {
        for(let i=0 ; i<checkedPw.message.length ; i++) {
            errorMsg += `<li style="margin-left: 35px;">${checkedPw.message[i]}</li>`
        }
    }
    if(errorMsg.length > 0) {
        alertMsg.innerHTML = `  <div>Please enter valid following</div>
                                    <ul>${errorMsg}</ul>`
        modal.fnShowmodal(backdrop, alertModal, 'visible')
    } else {
        const json = {
            email: email,
            password: password
        }
        const response = await api.fnfetchPostApi("/authen/fnLogin", json)

        alertMsg.innerHTML = `  <div>${response.message}</div> `
        modal.fnShowmodal(backdrop, alertModal, 'visible')
    }

}