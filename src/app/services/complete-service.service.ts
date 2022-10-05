import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { complete } from '../model/complete';

@Injectable({
  providedIn: 'root'
})
export class CompleteServiceService {


  constructor(private http : HttpClient) { }

getAllHwCompleted() : Observable<Array<complete>>{
  return this.http.get<Array<complete>>(
    "http://localhost:8050/complete");
  }

getHwCompletedByUserAndSubjectId(userId: number, subjectId: number) : Observable<Array<complete>>{
  return this.http.get<Array<complete>>(
    "http://localhost:8050/complete/"+ userId + "/" + subjectId+ "/");
  }
}
