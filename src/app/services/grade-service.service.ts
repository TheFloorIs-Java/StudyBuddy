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

  /**
   * HTTP GET Request - Retrieve all grades by the current user logged in
   * @returns an array of grade data that matches the current user logged in
   */
  getGrades(): Observable<Array<grade>> {
    return this.http.get<Array<grade>>(
      "http://localhost:8050/grades/" + this.gbservice.currentUserId);
  }

  /**
   * HTTP POST Request - To add a subject + grade to the current user logged in
   * @param subjectId - subjectId that indicates the subject that the user would like to add
   * @param grade - a number from 0-100 that users may type in for their current grade in the subject
   */
  addGrades(subjectId: number, grade: number): void {
    this.http.post<any>("http://localhost:8050/grades", { userId: this.gbservice.currentUserId, subjectId: subjectId, grade: grade }).subscribe(response => console.log(response))
  }

  /**
   * HTTP GET Request - Retrieve all grades based on the parameters of current user logged in and subjectId
   * We have this to help us get the gradeId needed for our HTTP PUT Request
   * @returns an array of grade data that matches the current user logged in and subjectId
   */
  getGradeId(subjectId: number): Observable<grade> {
    return this.http.get<grade>("http://localhost:8050/grades/" + this.gbservice.currentUserId + "/" + subjectId
    )
  }

  /**
   * HTTP PUT Request - To update an existing grade
   */
  update(gradeId: number, subjectId: number, grade: number): void {
    // console.log(gradeId);
    this.http.put<any>("http://localhost:8050/grades/", {
      gradeId: gradeId, userId: this.gbservice.currentUserId, subjectId: subjectId, grade: grade
    }).subscribe(response => { console.log(response) })
  }
}