import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  name: string = "";
  username: string = "";
  password: string = "";
  message: string = "";

  constructor(private uservice: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * signIn utilizes the User Service to communicate with our API in creating a new user
   * It also utilizes the checkPass function to make sure that the user is creating a password that is more than 5 characters,
   * if they do not use more than 5 characters than it will not allow the user to sign up
   * If sign up is succesful then it will redirect user to the login page
   */
  signIn(): void {
    if (this.checkPass()) {
      this.uservice.addUser(this.name, this.username, this.password);
      this.uservice.getAllUsers().subscribe(data => console.log(data));
      this.router.navigateByUrl('');
    }
  }

  /**
   * checkPass checks to see that the user is inputting more than 5 characters for their account password
   * If password is less than 5 characters, or the input boxes are left empty, it will prompt an error and have the user try again
   * @returns Will return true or false based on input
   */
  checkPass(): boolean {
    if (this.password.length < 5) {
      this.message = "Weak Password, Try Again";
      return false;
    } else if (this.username == "" || this.name == "") {
      this.message = "All Fields Need to Be Filled";
      return false;
    } else {
      return true;
    }
  }
}
