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
        const regex = /([A-Za-z]+|[0-9]+|[+*?^$.%!#_@\-\[\]{}()|]+){8,}/
        return regex.test(str)
    },
    fnShowTextWarning: (isValid, Node) => {
        if (isValid) {
            Node.classList.add("d-none")
        } else {
            Node.classList.remove("d-none")
        }
    }
}
export default validation