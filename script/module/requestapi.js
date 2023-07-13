/* 
    make request to api
*/
const hostname = 'http://127.0.0.1:3000'

const api = {
    fnPostApi: async function fnCallAPI(url, data){
        return await new Promise((resolve, reject) => {
            try {
                fetch({
                    method: 'POST',
                    url: url,
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then((response) => {
                    response
                }).then((json) => {
                    resolve(json)
                })
            } catch(error){
                reject(error)
            }
        })
    },
    fnCallBackAPI: function (url, data, callback){
        try {
            fetch({
                method: 'GET',
                url: url,
                headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((response) => {
                response
            }).then((json) => {
                callback()
            })
        } catch (error){
            throw error
        }
    } 
}

export default api
