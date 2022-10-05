import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalServiceService } from './global-service.service';
import { homework } from '../model/homework';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {


  constructor(private http : HttpClient, private gservice: GlobalServiceService,
    private sservice: SubjectService){ 
      this.getAllHw().subscribe(data=>this.homeworkArray=data);
   

  }

  homeworkArray : Array<homework> =[];

  
  //gets all the HW for each of the user and subjects
  getAllHw() : Observable<Array<homework>> {
    return this.http.get<Array<homework>>("http://localhost:8050/homework");
  }
  getAllHwByUser() : Observable<Array<homework>> {
    return this.http.get<Array<homework>>("http://localhost:8050/homework/user/"+this.gservice.currentUserId);
  }
  getHwForSubject(subjectIn: string): Observable<Array<homework>> {
      return this.http.get<Array<homework>>("http://localhost:8050/homework/"+this.gservice.currentUserId+"/"+this.sservice.getSubjectByName(subjectIn));
  }
  // returnHwSubject(subjectin : string ): Array<homework>{
  //   return null;
  // }
  addHwItemForSubject(subjectIn : string, hwItemIn :string) : void{
    this.getAllHw().subscribe(data=>this.homeworkArray=data);
    this.http.post<any>("http://localhost:8050/homework", 
   {userId:this.gservice.currentUserId, subjectId: this.sservice.getSubjectByName(subjectIn), hwItem:hwItemIn}).subscribe(data=>console.log(data));
   this.getAllHw().subscribe(data=>this.homeworkArray=data);
    }
  deleteHwItem(hwIn : string){
    this.getAllHw().subscribe(data=>this.homeworkArray=data);
    this.http.get<any>("http://localhost:8050/homework/"+this.getIdHw(hwIn)).subscribe(data=>console.log(data));
    this.getAllHw().subscribe(data=>this.homeworkArray=data);
  }

  getIdHw(hwIn : string ) : number{
    this.getAllHw().subscribe(data=>this.homeworkArray=data);
    console.log(this.homeworkArray);
    for (let  i=0 ; i<this.homeworkArray.length; i++){
      console.log(this.gservice.currentUserId)
      console.log(hwIn +" " +i+ "     "+this.homeworkArray[i].hwItem);
      console.log(hwIn==this.homeworkArray[i].hwItem);
      if(this.homeworkArray[i].hwItem==hwIn && this.homeworkArray[i].userId ==this.gservice.currentUserId){
        console.log(this.homeworkArray[i].hwId)
        return this.homeworkArray[i].hwId;
      }
  }
  return this.homeworkArray.length;
  }

}
