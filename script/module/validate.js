/*
    validate form input
*/
const validation = {
    fnValidationEmail: (str) => {
        const regex = /((\w+\.)?\w+\@\w+\.\w+){1,}/
        return regex.test(str)
    },
    fnValidationUsername: (str) => {
        const regex = /([A-Za-z]+|[0-9]+){8,}/
        return regex.test(str)
    },
    fnValidationPassword: (str) => {
        const regex = /^(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&]).{8,16}$/
        return regex.test(str)
    }
}
export default validation