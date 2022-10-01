import { subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { grade } from 'src/app/model/grade';
import { GradeService } from 'src/app/services/grade/grade.service';


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

  constructor(private http: HttpClient, private gservice: GradeService, private sservice: SubjectService) { }

  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);

    //ID TO NAME
    //LINK TO GETSUBECTBYID http://localhost:8000/subjects/ID/{ID}
    this.http.get <subject> ("http://localhost:8000/subjects/id/" + this.subjectId).subscribe(data => {this.subjectName = data.subjectName; console.log(this.subjectName)})
  }


}



