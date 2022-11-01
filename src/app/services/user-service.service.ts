import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  /**
   * HTTP GET Request - Retrieve all users from the user database
   * @returns an array of the user data with all the information
   */
  getAllUsers(): Observable<Array<user>> {
    return this.http.get<Array<user>>("http://localhost:8050/users");
  }

  /**
   * HTTP POST Request - To add a new user
   * @param nameIn - Name input by user
   * @param usernameIn - Username input by user
   * @param passwordIn  - Passwrod input by user
   */
  addUser(nameIn: string, usernameIn: string, passwordIn: string): void {
    this.http.post<any>("http://localhost:8050/users",
      { name: nameIn, username: usernameIn, password: passwordIn }).subscribe(data => console.log(data));
  }

}
