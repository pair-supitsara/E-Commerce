
/* 
    make request to api
*/
const protocol = window.location.protocol
const hostname = protocol + '://127.0.0.1:3000/api/demo/fnDemo'


const api = {
    fnfetchPostApi: async function fnCallAPI(endpoint, data){
        console.log(endpoint)
        console.log(data)
        return await new Promise((resolve, reject) => {
            try {
                fetch({
                    method: 'POST',
                    url: endpoint,
                    headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then((response) => {
                    response
                }).then((json) => {
                    console.log(json)
                    return resolve(json)
                })
            } catch(error){
                console.log(error)
                reject(error)
            }
        })
    },    
    fnJQueryPostApi: async function (endpoint, data){
        console.log(endpoint)
        console.log(data)
        return await new Promise((resolve, reject) => {
            try {
                $.post({
                    url: endpoint,
                    data: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    success : function (res) {
                        console.log(res)
                        resolve(res)    
                    }
                })
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }
}

export default api
