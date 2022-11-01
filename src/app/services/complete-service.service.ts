import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { complete } from '../model/complete';

@Injectable({
  providedIn: 'root'
})
export class CompleteServiceService {

  constructor(private http: HttpClient) { }

  /**
   * HTTP GET Request - Retrieve all complete data from the complete table
   * @returns an array of the complete data with all the information
   */
  getAllHwCompleted(): Observable<Array<complete>> {
    return this.http.get<Array<complete>>(
      "http://localhost:8051/complete");
  }

  /**
   * HTTP GET Request - Retrieve all complete data based on the parameters userId and subjectId
   * @param userId - current user logged in
   * @param subjectId - the subjectId that the user is currently viewing
   * @returns an array of the complete data that matches our userId and subjectId
   */
  getHwCompletedByUserAndSubjectId(userId: number, subjectId: number): Observable<Array<complete>> {
    return this.http.get<Array<complete>>(
      "http://localhost:8051/complete/" + userId + "/" + subjectId + "/");
  }
}
