
/* 
    make request to api
    example: 'http://127.0.0.1:3000/api/controller/endpointname'
*/
const hostname = 'http://127.0.0.1:3000/api'
const api = {
    fnfetchPostApi: async function (endpoint, data){
        return await new Promise((resolve, reject) => {
            try {
                fetch(hostname + endpoint,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then((response) =>
                    response.json()
                ).then((json) =>
                    resolve(json)
                )
            } catch(error){
                reject(error)
            }
        })
    },    
    fnJQueryPostApi: async function (endpoint, data){
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