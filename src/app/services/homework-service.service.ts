import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalServiceService } from './global-service.service';
import { homework } from '../model/homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {


  constructor(private http : HttpClient, private gservice: GlobalServiceService, ){ 
    this.getAllHw().subscribe(data=>this.homeworkArray=data);
    this.homeworkItem = new Array<string>;

  }

  homeworkArray : Array<homework> =[];
  homeworkItem: Array<string> =[];

  
  //gets all the HW for each of the user and subjects
  getAllHw() : Observable<Array<homework>> {
    return this.http.get<Array<homework>>("https://632e11ebb37236d2ebe5b899.mockapi.io/homework");
  }

  getHwForSubject(subjectIn: string) {
    this.homeworkItem = new Array<string>;
    for (let  i=0 ; i< this.homeworkArray.length; i++){
        if(this.homeworkArray[i].name==this.gservice.currentUserName && this.homeworkArray[i].subject==subjectIn){
         this.homeworkItem.push(this.homeworkArray[i].hwItem);
        }
    }
  }

  addHwItemForSubject(subjectIn : string, hwItemIn :string) : void{
    this.http.post<any>("https://632e11ebb37236d2ebe5b899.mockapi.io/homework", 
    {name:this.gservice.currentUserName, subject: subjectIn, hwItem:hwItemIn}).subscribe(data=>console.log(data));
    this.homeworkArray.push({name:this.gservice.currentUserName, subject: subjectIn, hwItem:hwItemIn});
  }
  deleteHwItem(hwIn : string){
    this.http.delete<any>("https://632e11ebb37236d2ebe5b899.mockapi.io/homework/"+this.getIdHw(hwIn)).subscribe(data=>console.log(data));
    this.homeworkArray.splice(this.getIdHw(hwIn)-1, 1);

  }

  getIdHw(hwIn : string ) : number{
    console.log(this.homeworkArray);
    for (let  i=0 ; i< this.homeworkArray.length; i++){
      if(this.homeworkArray[i].hwItem==hwIn && this.homeworkArray[i].name ==this.gservice.currentUserName){
        console.log(hwIn);
        console.log(this.gservice.currentUserName);
        //because it is 0 based index and the id starts at 1
      return i+1;
      }
  }
  return 0;
  }

}
