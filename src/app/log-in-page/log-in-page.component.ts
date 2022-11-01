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

  username: string = "";
  password: any = "";
  message: string = "";

  constructor(private uservice: UserServiceService, private gservice: GlobalServiceService,
    private router: Router) { }

  /**
   *   array of all users to check our log in 
   */
  allUsers: Array<user> = [];

  /**
   * If they are on the log in page, they should not be logged in. 
   * To ensure they are logged out we will call our Global Service to make sure that no user is logged in.
   */
  ngOnInit(): void {
    this.uservice.getAllUsers().subscribe(data => this.allUsers = data);

    /**
     * To make sure there is no user logged in
     */
    this.gservice.currentUserName = "";
    this.gservice.LogUserOut();
  }

  /**
   * When user clicks on our button Log In it will check the user's input against our data of all users
   * If it checks out, then the user will be logged in and greeted to the welcome page. Also upon login, the user's info wil be set to inside our Global Service
   * If it does not check out, then the user will be prompted with an error message
   */
  check(): void {
    //get updated allUser list
    this.uservice.getAllUsers().subscribe(data => this.allUsers = data);
    let messagedOut = false;
    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.allUsers[i].username == this.username && this.allUsers[i].password == this.password) {
        this.gservice.currentUserName = this.allUsers[i].name;
        this.gservice.currentUserId = this.allUsers[i].userId;
        this.gservice.LogUserIn();
        this.router.navigateByUrl('welcomepage');
        messagedOut = true;
      }
    }
    if (!messagedOut) {
      this.message = "Sorry, User Not Found";
    }
  }

  /**
   * When user clicks on our button Sign Up it will navigate to our sign up page
   */
  signInPage(): void {
    this.router.navigateByUrl('signIn');
  }

}
