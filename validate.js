
const validation = {
    fnValidation: (str) => {
        const regex = /^(\w+\.)?\w+\@\w+\.\w+$/
        return regex.test(str)
    }
}

export default validation