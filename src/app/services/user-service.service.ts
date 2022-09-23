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
      return this.http.get<Array<user>>("https://632d0724519d17fb53b6f382.mockapi.io/user");
  }
  //when we create an API we can change "URL" to our API url
  addUser(nameIn: string, usernameIn: string, passwordIn: string): void{
      // this.http.post<any>("URL", 
      // {name:nameIn, username:usernameIn, password:passwordIn}).subscribe(data=>console.log(data));
  }

}
