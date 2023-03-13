import PostalCode from '@salesforce/schema/Lead.PostalCode';
import { LightningElement, track} from 'lwc';
export default class HelloWorld extends LightningElement {
    fullname="Zero To Hero"
    title ="aura"
    changeHandler(event){
      this.title = event.target.value
    }
    @track address={
      city:'Toronto',
      PostalCode:3008,
      country:'Canada'
    }
    trackHandler(event){
      this.address.city = event.traget.value
    }
    //alternate method 
      // this.address={...this.addresss,"city":event.traget.value}
    
    //getter example
    users = ["john", "latha", "lalith"]
    userFIrst = this.users[0]
    num1 = 10
    num2 = 20 

    get firstUser(){
      return this.users[0].toUpperCase()
    }
    get multiply(){
      return this.num1*this.num2
    }
    
  // greeting = 'World';
    // changeHandler(event) {
    //   this.greeting = event.target.value;
    //}
  }