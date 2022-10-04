import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

name :string= "";
username: string ="";
password: string ="";
message: string ="";

  constructor( private uservice : UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

signIn() :void{
  //checks password is long enough to be safe
  if(this.checkPass()){ 
  //when addUser actually works, this should work
   this.uservice.addUser(this.name, this.username, this.password);
   this.uservice.getAllUsers().subscribe(data => console.log(data));
  //for now we pretend it worked and reroute to the log in page
  this.router.navigateByUrl('');
  }
}
checkPass() : boolean{
  if(this.password.length<5){
    this.message="Weak Password, Try Again";
    return false;
  }else if(this.username =="" || this.name ==""){
    this.message="All Fields Need to Be Filled";
    return false;
  }else{
  return true;
}
}
}
