/*
    validate form input
*/
const validation = {
    fnValidateEmail: (email) => {
        let bool = true
        let msg = []
        if (!email.match(/((\w+\.)?\w+\@\w+\.\w+){1,}/)){
            msg.push('email is invalid')
            bool &&= false
        }
        return {
            email: email,
            isvalid: bool,
            message: msg
        }
    },
    fnValidateUsername: (str) => {
        const regex = /([A-Za-z]+|[0-9]+){8,}/
        return regex.test(str)
    },
    fnValidatePassword: (pw) => {
        let bool = true
        let msg = []
        if (!pw.match(/(?=.*[A-Z])/g)) {
            msg.push('password not contain A-Z')
            bool &&= false
        }
        if (!pw.match(/(?=.*[a-z])/g)) {
            msg.push('password not contain a-z')
            bool &&= false
        }
        if (!pw.match(/(?=.*[0-9])/g)) {
            msg.push('password not contain 0-9')
            bool &&= false
        }
        if (!pw.match(/(?=.*[\~\`\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\|\;\:\"\'\<\>\,\.\/\?])/g)) {
            msg.push('password not contain special characters')
            bool &&= false
        }
        if (!pw.match(/.{8,}/g)) {
            msg.push('password not 8 in length')
            bool &&= false
        }
        return {
            password: pw,
            isvalid: bool,
            message: msg
        }
    },
    fnValidateConfirmPassword: (pw, cfpw) => {
        let bool = true
        let msg = []
        if (pw !== cfpw) {
            msg.push('confirm password is not equal')
            bool &&= false
        }
        return {
            password: pw,
            confirmpassword: cfpw,
            isvalid: bool,
            message: msg
        }
    }
}
export default validation