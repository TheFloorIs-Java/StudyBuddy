
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../model/user';
import { GlobalServiceService } from '../services/global-service.service';
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {


  username: string ="";
  password: any ="";
  message : string = "";
  constructor(private uservice: UserServiceService, private gservice: GlobalServiceService,
    private router: Router) { }
    //array of all users to check our log in 
  allUsers : Array<user> =[];

  ngOnInit(): void {
    this.uservice.getAllUsers().subscribe(data=>this.allUsers=data);

    //if they get to this page, then they should be logged out
    this.gservice.currentUserName="";
    this.gservice.LogUserOut();
  }

  check(): void{
    //get updated allUser list
    this.uservice.getAllUsers().subscribe(data=>this.allUsers=data);
   let messagedOut=false;
   //check our users 
    for(let i=0; i<this.allUsers.length; i++){
      if(this.allUsers[i].username==this.username && this.allUsers[i].password==this.password){
        // set the currentUserName
        this.gservice.currentUserName=this.allUsers[i].name;
        this.gservice.currentUserId = this.allUsers[i].userId;
        // user is logged in 
       this.gservice.LogUserIn();
        this.router.navigateByUrl('welcomepage');
       messagedOut=true;
      }
    }
    if(!messagedOut){
      this.message="Sorry, User Not Found";
    }
  }

  signInPage(): void{
    this.router.navigateByUrl('signIn');
  }

}
