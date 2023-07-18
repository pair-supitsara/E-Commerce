import api from './module/requestapi.js'

// #region event listener
const pageRegister = document.getElementById("registerPage")
const pageLogin = document.getElementById("loginPage")
const goPageLogin = document.getElementById("goPageLogin")
goPageLogin.addEventListener('click', async function() {
    pageLogin.classList.remove('d-none')
    pageRegister.classList.add('d-none')
})

// #endregion

async function fnLogin(email, password) {
    const endpoint = 'http://127.0.0.1:3000/api/authen/fnLogin'
    const json = {
        email,
        password
    }
    const result = await api.fnJQueryPostApi(endpoint, json) 
}