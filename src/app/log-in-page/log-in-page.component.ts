
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { user } from '../model/user';
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

  constructor(private uservice: UserServiceService, private router: Router) { }
  allUsers : Array<user> =[];
  ngOnInit(): void {
    this.uservice.getAllUsers().subscribe(data=>this.allUsers=data);
  }
  check(): void{
   let messagedOut=false;
    for(let i=0; i<this.allUsers.length; i++){
      if(this.allUsers[i].username==this.username && this.allUsers[i].password==this.password){
       this.message="Correct";
       messagedOut=true;
      }
    }
    if(!messagedOut){
      this.message="False";
    }

  }

  signInPage(): void{
    this.router.navigateByUrl('signIn');
  }

}
