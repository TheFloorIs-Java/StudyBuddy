import { Injectable } from '@angular/core';
import { HomeworkServiceService } from './homework-service.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
//this this going to be used to declare the global user that is signed in 
  currentUserName : string="";

//this is going to prove if someone is logged in
 private loggedIn : boolean;

  constructor( ) {
    this.loggedIn=false;
   }

  //returns if user is Logged In 
  isLoggedIn() : boolean{
    return this.loggedIn;
  }
  //indicates user is Logged In
  LogUserIn() : void{
    this.loggedIn=true;
  }
  //lets user log out
  LogUserOut() : void{
    this.loggedIn=false;
    //this.hservice.homeworkArray=[];
  }

}
