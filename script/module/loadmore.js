export class loadmore {
    constructor(items, element, modal, range) {
      this.items = items || [];
      this.startIndex = 0;
      this.ItemPerload = range || 4;
      this.lastIndex = this.items.length;
      this.parentElement = element
    }

    init() {
        this.fnLoadItems()
    }

    fnLoadItems() {
        let endIndex = this.startIndex + this.ItemPerload
        for(let i = this.startIndex ; i < endIndex && i < this.lastIndex ; i++) {
            this.fnCreateBox(this.parentElement, i)
        }    
        this.startIndex += this.ItemPerload;
    }

    fnCreateBox(div, index) {
        const el = document.createElement("div");
        const attr = document.createAttribute("class");    
        attr.value = "box"; /* class box */
        el.innerText = "index" + index;  
        el.setAttributeNode(attr);
        div.appendChild(el)
    }

}