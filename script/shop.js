import api from './module/requestapi.js'

// api.fnfetchPostApi("/ecommerce/fnGetPopularTag", { })


const btSearch = document.getElementById('btSearch')
btSearch.addEventListener('click', async function() {
    const response = await api.fnfetchPostApi("/ecommerce/fnSearchProduct", { keyword: "" })
    console.log(response)
})