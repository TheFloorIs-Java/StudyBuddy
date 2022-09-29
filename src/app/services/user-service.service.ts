import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient){}

  //gets all users
  getAllUsers() : Observable<Array<user>>{
      return this.http.get<Array<user>>("http://localhost:8000/users");
  }
  //when we create an API we can change "URL" to our API url
  addUser(nameIn: string, usernameIn: string, passwordIn: string): void{
      this.http.post<any>("http://localhost:8000/users", 
      {name:nameIn, username:usernameIn, password:passwordIn}).subscribe(data=>console.log(data));
  }

}
