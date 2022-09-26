import { map } from 'rxjs/internal/operators/map';
import { subject } from 'src/app/model/subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  

  // subjectID: number = 0;
  // subject: string = "subject";

  constructor(private http: HttpClient) { }
  
  allSubjects: Array<subject> = [];

  // Gets all the Subject Types
  getAllSubjects() : Observable<Array<subject>> {
    return this.http.get<Array<subject>>("https://632cb92f519d17fb53b2cfb1.mockapi.io/subjects/");
  }


  getSubjectsById(subjectID: number) : Observable<subject[]> {
    
    return this.http.get<subject[]>(
      "https://632cb92f519d17fb53b2cfb1.mockapi.io/subjects/" + subjectID
    )
  }
}

// .subscribe(data => console.log(data.toString()));