import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { grade } from '../../../model/grade';
import { subject } from '../../../model/subject';
import { GradeServiceService } from '../../../services/grade-service.service';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.css']
})
export class UserGradesComponent implements OnInit {

  @Input()
  subjectId: number = 0;
  subjectName: string = "";

  @Input()
  grade: number = 0;

  userGrades: Array<grade> = [];

  constructor(private http: HttpClient, private gservice: GradeServiceService, private sservice: SubjectService) { }

  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);

    //ID TO NAME
    //LINK TO GETSUBECTBYID http://localhost:8000/subjects/ID/{ID}
    this.http.get <subject> ("http://localhost:8000/subjects/id/" + this.subjectId).subscribe(data => {this.subjectName = data.subjectName; console.log(this.subjectName)})
  }

}
