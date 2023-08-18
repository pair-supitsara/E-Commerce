const btBestSeller = document.getElementById("loadBestSellerMore")
const divBestSeller = document.getElementById("bestSeller")

let items = [0,1,2,3,4,5,6,7,8,9]
let lastIndex =  items.length
let startIndex = 0
const ItemPerload = 4

/* initial */
fnLoadItems()

btBestSeller.addEventListener('click', function () {
    fnLoadItems()
})
function fnLoadItems() {
    let endIndex = startIndex + ItemPerload
    for(let i = startIndex ; i < endIndex && i < lastIndex ; i++) {
        fnCreateBox(i)
    }    
    startIndex += ItemPerload;
}

function fnCreateBox(index) {
    const el = document.createElement("div");
    const attr = document.createAttribute("class");    
    attr.value = "box"; /* class box */
    el.innerText = "index" + index;  
    el.setAttributeNode(attr);
    divBestSeller.appendChild(el)
}
