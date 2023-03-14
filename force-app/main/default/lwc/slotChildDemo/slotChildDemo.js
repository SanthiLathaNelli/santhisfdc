import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleFooterChange() {
        const footerelem = this.template.querySelector('.slds-card__footer')
        if (footerelem) {
            footerelem.classList.remove('slds-hide')
        }
    }
}