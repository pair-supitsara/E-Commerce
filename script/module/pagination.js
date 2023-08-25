export class Pagination {
    constructor(items, itemsPerPage, cartItems, paginationButtons){
        this.itemsInCart = items
        this.itemsPerPage = itemsPerPage
        this.NumItemsInCart = this.itemsInCart.length
        this.totalPage = Math.ceil(this.NumItemsInCart / this.itemsPerPage)
        this.startIndex = 0
        this.endIndex = 0
        this.pageNumber = 1

        // parent element
        this.cartItems = cartItems
        this.paginationButtons = paginationButtons
    }

    fnInitItemsPerPageInCart() {
        this.fnLoadItemsPerPageInCart(this.pageNumber)
    }

    fnLoadItemsPerPageInCart(pageNumber) {
        this.cartItems.innerHTML = ''
        this.startIndex = (pageNumber-1) * this.itemsPerPage
        this.endIndex = this.startIndex + this.itemsPerPage
        for(let i=this.startIndex ; i<this.endIndex && i<this.NumItemsInCart ; i++){
            console.log("this.startIndex" + this.startIndex)
            console.log("this.endIndex" + this.endIndex)
            console.log(i)
            this.fnCreateItemInCart(this.cartItems, i)
        }
    }

    fnCreateItemInCart(parent, index) {
        const html = `<div class='item'>
                        <div class='image'></div>
                        <div class='detail-item'>${index}</div>
                    </div>`
        parent.insertAdjacentHTML("beforeend", html);
    }

    fnInitPaginiationButton() {
        for(let i=0 ; i<this.totalPage ; i++){
            const pageNumber = (i+1)
            this.fnCreatePaginationButton(this.paginationButtons, pageNumber)
        }
    }

    fnCreatePaginationButton(parent, index) {
        const span = document.createElement("span")
        span.innerText = index
        span.classList.add("pagination-item")
        span.addEventListener('click', this.fnClickPaginationButton.bind(this))
        parent.appendChild(span)
    }

    fnClickPaginationButton(event){
        const pageIndex = event.target.innerText;
        const allPageNumber = document.getElementsByClassName('pagination-item')
        for(let item of allPageNumber){
            item.classList.remove('pagination-item-active')
        }
        event.target.classList.add('pagination-item-active')
        this.fnLoadItemsPerPageInCart(pageIndex)
    }
}