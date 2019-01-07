import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  users=[]; 
  userid='';
  constructor() {
    console.log('Hello UserServiceProvider Provider');
  }


  registerUser(payload){
    console.log(payload.name);
   this.users.push({name:payload.name,email:payload.email,password:payload.password});
   console.log(this.users);

}

loginUser(pay){
  this.users.forEach(element => {
    if(element.email==pay.email && element.password==pay.password){
    console.log(true);
     return true; 
     }else{
       console.log(false);
     return false; 
    }
  })
}
}
