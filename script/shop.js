import { Pagination } from "./module/pagination.js"

const itemsInCart = [0,1,2,3,4,5,6,7,8,9,10,11]
const itemsPerPage = 5;
const btPagination = document.getElementById("paginationButton")
const parentCart = document.getElementById("items")

const pagination = new Pagination(itemsInCart, itemsPerPage, parentCart, btPagination);
pagination.fnInitItemsPerPageInCart()
pagination.fnInitPaginiationButton()
