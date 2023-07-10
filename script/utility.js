function fnCallAPI(url, data){
    return new Promise((resolve, reject) => {
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
                resolve(json)
            })
        } catch(error){
            reject(error)
        }
    })
}

function fnCallBackAPI(url, data, callback){
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