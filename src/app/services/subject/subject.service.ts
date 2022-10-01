
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { subject } from 'src/app/model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  allSubjects: Array<subject> = [
    { subjectId: 1, subjectName: "Math", tips: "none" },
    { subjectId: 2, subjectName: "Science", tips: "none" },
    { subjectId: 3, subjectName: "English", tips: "none" },
    { subjectId: 4, subjectName: "History", tips: "none" },
    { subjectId: 5, subjectName: "Artist", tips: "none" },
    { subjectId: 6, subjectName: "Music", tips: "none" }];

  constructor(private http: HttpClient) {
    this.getAllSubjects().subscribe(data => this.allSubjects = data);
  }

  getAllSubjects(): Observable<Array<subject>> {
    // this.http.get<Array<subject>>("http://localhost:8000/subjects").subscribe(data=> this.allSubjects=data)
    return this.http.get<Array<subject>>("http://localhost:8000/subjects");
  }
  getSubjectById(id: number): string {
    for (let i = 0; i < this.allSubjects.length; i++) {
      if (this.allSubjects[i].subjectId == id) {
        return this.allSubjects[i].subjectName;
      }
    }
    return "Math";
  }
}