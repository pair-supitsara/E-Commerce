
// load more

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
    if(itemsBestSeller.length == divBestSeller.children.length){
        fnNoContentHideLoadmore(this)
    }
})

const divOnSale = document.getElementById("onSale")
const btOnSale = document.getElementById("loadOnSaleMore")
const load2 = new loadmore(itemsOnsale, divOnSale)
load2.init()
btOnSale.addEventListener('click', function(){
    load2.fnLoadItems()
    if(itemsOnsale.length == divOnSale.children.length){
        fnNoContentHideLoadmore(this)
    }
})

const divNewArrive = document.getElementById("NewArrive")
const btNewArrive = document.getElementById("loadNewArriveMore")
const load3 = new loadmore(itemsNewArrive, divNewArrive)
load3.init()
btNewArrive.addEventListener('click', function(){
    load3.fnLoadItems()
    if(itemsNewArrive.length == divNewArrive.children.length){
        fnNoContentHideLoadmore(this)
    }
})

function fnNoContentHideLoadmore(obj){
    obj.classList.add('invisible')
}

// pagination

import { Pagination } from "./module/pagination.js"

const itemsInCart = [0,1,2,3,4,5,6,7,8,9,10,11]
const itemsPerPage = 4;
const btPagination = document.getElementById("paginationButton")
const parentCart = document.getElementById("items")

const pagination = new Pagination(itemsInCart, itemsPerPage, parentCart, btPagination);
pagination.fnInitItemsPerPageInCart()
pagination.fnInitPaginiationButton()

// modal

import modal from './module/modal.js'

const backdrop = document.getElementById("backdrop")
backdrop.addEventListener('click', function(event){
    if(!event.target.closest('.card') // click backdrop always close modal
        || event.target.closest('.x-square-icon')) { // click [x] always close modal
        modal.fnHideModal(backdrop)
    }
})
const modalCart = document.getElementById("modalCart")
const cart = document.getElementById("navCart");
cart.addEventListener('click', function () {
    modal.fnShowmodal(backdrop, modalCart, 'visible')
})
const modalProduct = document.getElementById("modalProduct")
const boxs = document.querySelectorAll(".container")[0];
boxs.addEventListener('click', function(event){
    const item = event.target.closest('.box')
    if(item){
        console.log(item.id)
        modal.fnShowmodal(backdrop, modalProduct, 'visible')
    }
})

// call api

/*
import api from './module/requestapi.js'

api.fnfetchPostApi("/ecomerce/fnGetAllItemsInCategory", { })

api.fnfetchPostApi("/ecomerce/fnAddItemsToMyCart", { })

api.fnfetchPostApi("/ecomerce/fnItemsInMyCart", { })
*/