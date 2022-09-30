import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //this this going to be used to declare the global user that is signed in 
  currentUserName : string="";
  currentUserId : number = 1;
//this is going to prove if someone is logged in

private loggedIn : boolean;

  constructor() { this.loggedIn=false;
  }

 //lets user log out
 LogUserOut() : void{
   this.loggedIn=false;
   //this.hservice.homeworkArray=[];
 }

}
