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
        const attrClass = document.createAttribute("class");    
        attrClass.value = "box"; /* class box */
        el.setAttributeNode(attrClass);
        const attrId = document.createAttribute("id");    
        attrId.value = "box"+index; /* class box */
        el.setAttributeNode(attrId);
        el.innerText = "index" + index;
        div.appendChild(el)
    }
}