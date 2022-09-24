import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalServiceService } from './global-service.service';
import { homework } from '../model/homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {


  constructor(private http : HttpClient, private gservice: GlobalServiceService ){ }


  
  //gets all the HW for each of the user and subjects
  getAllHw() : Observable<Array<homework>> {
    return this.http.get<Array<homework>>("https://632e11ebb37236d2ebe5b899.mockapi.io/homework");
  }

 

  addHwItemForSubject(subjectIn : string, hwItemIn :string) : void{
    this.http.post<any>("https://632e11ebb37236d2ebe5b899.mockapi.io/homework", 
    {name:this.gservice.currentUserName, subject: subjectIn, hwItem:hwItemIn}).subscribe(data=>console.log(data));
  }

}
