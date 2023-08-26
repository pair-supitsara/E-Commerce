
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

import { Pagination } from "./module/pagination.js"

const itemsInCart = [0,1,2,3,4,5,6,7,8,9,10,11]
const itemsPerPage = 4;
const btPagination = document.getElementById("paginationButton")
const parentCart = document.getElementById("items")

const pagination = new Pagination(itemsInCart, itemsPerPage, parentCart, btPagination);
pagination.fnInitItemsPerPageInCart()
pagination.fnInitPaginiationButton()

// click backdrop always close modal

const modalCart = document.getElementById("modalCart")
modalCart.addEventListener('click', function(event){
    if(!event.target.closest('.card')
        || event.target.closest('.x-square-icon')) {
        fnCloseAllModal()
    }
})

const modalProduct = document.getElementById("modalProduct")

modalProduct.addEventListener('click', function(event){
    if(!event.target.closest('.card') 
        || event.target.closest('.x-square-icon')) {
        fnCloseAllModal()
    }
})

function fnCloseAllModal(){
    const backdrop = document.querySelectorAll(".backdrop")
    backdrop.forEach((element) => {
        console.log(element)
        element.classList.remove('visible')
    });
}

// click cart button always toggle class

const cart = document.getElementById("navCart");
cart.addEventListener('click', function () {
    modalCart.classList.toggle('visible');
})

// open product modal
const boxs = document.querySelectorAll(".container")[0];
boxs.addEventListener('click', function(event){
    const item = event.target.closest('.box')
    if(item){
        fnOpenProductModal(item.id)
    }
})

function fnOpenProductModal(id){
    const modalProduct = document.getElementById("modalProduct")
    modalProduct.classList.add('visible')
}
