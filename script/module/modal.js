/*
    note : #backdrop means id has name backdrop
*/
const modal = {
    /*
        fnShowmodal: fnShowmodal()
        #backdrop: always open
        #modal: this modal will be display, others will be hidden.
        class: when show flex or block.
    */
    fnShowmodal: function (backdrop, modal, visibleclass) {
        const bdChild = backdrop.children
        backdrop.classList.add('visible')
        for(let i=0;i< bdChild.length ;i++){
            bdChild[i].classList.remove('visible')
        }
        modal.classList.add('visible')
    },
    /*
        function: fnHideModal()
        backdrop: It will be hidden.
        modal: all modal in this will be hiidden.
    */
    fnHideModal: function (backdrop) {
        backdrop.classList.remove('visible')
    }
}
export default modal 