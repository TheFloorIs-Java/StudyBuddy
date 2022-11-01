import { Injectable } from '@angular/core';
import { HomeworkServiceService } from './homework-service.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  /** 
   * Storing current user logged in
   */
  currentUserName: string = "";
  currentUserId: number = 0;

  /**
   * To prove if someone is logged in
   */
  private loggedIn: boolean;

  constructor() {
    /**
     * As default we set loggedIn to be false
     */
    this.loggedIn = false;
  }

  /**
   * Checking to see if the user is logged in
   */
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  /**
   * Indicates the user is logged in
   */
  LogUserIn(): void {
    this.loggedIn = true;
  }

  /**
   * Allows the user to log out
   */
  LogUserOut(): void {
    this.loggedIn = false;
    //this.hservice.homeworkArray=[];
  }

}
