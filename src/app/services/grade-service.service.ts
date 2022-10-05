import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { grade } from '../model/grade';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  constructor(private http: HttpClient, private gbservice: GlobalServiceService) { 
  }
 // GET ALL GRADES PER USER  
getGrades() : Observable<Array<grade>>{
  return this.http.get<Array<grade>>(
    "http://localhost:8050/grades/" + this.gbservice.currentUserId);
}


// ADD SUBJECT + ADD GRADES
  addGrades(subjectId: number, grade:number) : void {
    this.http.post<any>( "http://localhost:8050/grades", {userId:this.gbservice.currentUserId, subjectId:subjectId, grade:grade}).subscribe(response => console.log(response))
  } 


// GET GRADEID BY USERID + SUBJECTID  
  getGradeId (subjectId: number) : Observable<grade> {
    return this.http.get<grade> ("http://localhost:8050/grades/" + this.gbservice.currentUserId + "/" + subjectId
    )
  } 
  
// UPDATE
  update(gradeId: number, subjectId: number, grade: number) : void {
    // console.log(gradeId);
    this.http.put<any> ("http://localhost:8050/grades/", {
      gradeId: gradeId, userId:this.gbservice.currentUserId, subjectId:subjectId, grade:grade
    }).subscribe(response => {console.log(response)})
  }
}