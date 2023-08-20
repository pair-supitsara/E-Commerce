
import { loadmore } from "./module/loadmore.js"

let itemsBestSeller = [0,1,2,3,4,5,6,7,8,9]
let itemsOnsale = [0,1]
let itemsNewArrive = [0,1,2]

const divBestSeller = document.getElementById("bestSeller")
const btBestSeller = document.getElementById("loadBestSellerMore")
const load1 = new loadmore(itemsBestSeller, divBestSeller)
load1.init()
btBestSeller.addEventListener('click', function(){
    load1.fnLoadItems()
})

const divOnSale = document.getElementById("onSale")
const btOnSale = document.getElementById("loadOnSaleMore")
const load2 = new loadmore(itemsOnsale, divOnSale)
load2.init()
btOnSale.addEventListener('click', function(){
    load2.fnLoadItems()
})

const divNewArrive = document.getElementById("NewArrive")
const btNewArrive = document.getElementById("loadNewArriveMore")
const load3 = new loadmore(itemsNewArrive, divNewArrive)
load3.init()
btNewArrive.addEventListener('click', function(){
    load3.fnLoadItems()
})

// pagination
const itemsInCart = [0,1,2,3,4,5,6,7,8,9,10,11]
const itemsPerPage = 5;
let totalPage = Math.ceil(itemsInCart.length/itemsPerPage)

let startIndex = 0
let endIndex
let pageNumber = 1

fnLoadItemsPerPageInCart(pageNumber)
function fnLoadItemsPerPageInCart(pageNumber) {
    const parentCart = document.getElementById("items")
    parentCart.innerHTML = ""
    startIndex = (pageNumber-1) * itemsPerPage
    endIndex = startIndex + itemsPerPage
    for(let i=startIndex ; i<endIndex && i<itemsInCart.length ; i++){
        fnCreateItemInCart(parentCart, i)
    }
}

function fnCreateItemInCart(parentnode, index) {
    const el = document.createElement("div")
    el.classList.add("item")
    const img = document.createElement("div")
    img.classList.add("image")
    el.appendChild(img)
    const detail = document.createElement("div")
    detail.innerText = index
    detail.classList.add("detail-item")
    el.appendChild(detail)
    parentnode.appendChild(el)
}

initPaginiationButton(totalPage)
function initPaginiationButton(totalPage) {
    const btPagination = document.getElementById("paginationButton")
    for(let i=0 ; i<totalPage ; i++){
        fnCreatePaginationButton(btPagination, i)
    }
}
function fnCreatePaginationButton(button, index) {
    const span = document.createElement("span")
    span.innerText = (index+1)
    span.classList.add("pagination-item")
    span.addEventListener('click', function() {
        const allPageNumber = document.getElementsByClassName('pagination-item')
        for(let item of allPageNumber){
            item.classList.remove('pagination-item-active')
        }
        span.classList.add('pagination-item-active')
        fnLoadItemsPerPageInCart(index+1)
    })
    button.appendChild(span)
}