import { subject } from 'src/app/model/subject';
import { GlobalService } from './../global/global.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, VirtualTimeScheduler } from 'rxjs';
import { grade } from 'src/app/model/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient, private gbservice: GlobalService) { 
    }
  // GET ALL GRADES PER USER  
  getGrades() : Observable<Array<grade>>{
    return this.http.get<Array<grade>>(
      "http://localhost:8000/grades/" + this.gbservice.currentUserId);
  }


  // ADD SUBJECT + ADD GRADES
    addGrades(subjectId: number, grade:number) : void {
      this.http.post<any>( "http://localhost:8000/grades", {userId:this.gbservice.currentUserId, subjectId:subjectId, grade:grade}).subscribe(response => console.log(response))
    } 


  // GET GRADEID BY USERID + SUBJECTID  
    getGradeId (subjectId: number) : Observable<grade> {
      return this.http.get<grade> ("http://localhost:8000/grades/" + this.gbservice.currentUserId + "/" + subjectId
      )
    } 
    
  // UPDATE
    update(gradeId: number, subjectId: number, grade: number) : void {
      // console.log(gradeId);
      this.http.put<any> ("http://localhost:8000/grades/", {
        gradeId: gradeId, userId:this.gbservice.currentUserId, subjectId:subjectId, grade:grade
      }).subscribe(response => {console.log(response)})
    }
}

  // GET ALL GRADES PER USER  
    // getGrades() : Observable<Array<grade>>{
    //   return this.http.get<Array<grade>>(
    //     "https://632cb92f519d17fb53b2cfb1.mockapi.io/grade/"
    //   ).pipe(map((response) => response.filter(response => response.userId == this.gbservice.currentUserId)));
    // }