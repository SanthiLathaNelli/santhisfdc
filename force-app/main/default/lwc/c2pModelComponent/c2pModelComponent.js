import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close', {
            bubbles:true,
            detail: {
                msg:"Modal closed successfuly!!"
            }
        })
        this.dispatchEvent(myEvent)
    }
    footerHandler(){
        console.log("footerHandler called")
    }
}