
import { loadmore } from "./module/loadmore.js"

let itemsBestSeller = [0,1,2,3,4,5,6,7,8,9]
let items2 = [0,1]
let items3 = [0,1,2]

const divBestSeller = document.getElementById("bestSeller")
const btBestSeller = document.getElementById("loadBestSellerMore")
const load1 = new loadmore(items, divBestSeller)
load1.init()
btBestSeller.addEventListener('click', function(){
    load1.fnLoadItems()
})

const divOnSale = document.getElementById("onSale")
const btOnSale = document.getElementById("loadOnSaleMore")
const load2 = new loadmore(items2, divOnSale)
load2.init()
btOnSale.addEventListener('click', function(){
    load2.fnLoadItems()
})

const divNewArrive = document.getElementById("NewArrive")
const btNewArrive = document.getElementById("loadNewArriveMore")
const load3 = new loadmore(items3, divNewArrive)
load3.init()
btNewArrive.addEventListener('click', function(){
    load3.fnLoadItems()
})