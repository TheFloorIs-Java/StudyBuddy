import { HttpClient } from '@angular/common/http';
import { subject } from '../../model/subject';
import { Component, Input, OnInit } from '@angular/core';
import { grade } from 'src/app/model/grade';
import { GlobalService } from 'src/app/services/global/global.service';
import { GradeService } from 'src/app/services/grade/grade.service';


@Component({
  selector: 'app-user-grades',
  templateUrl: './user-grades.component.html',
  styleUrls: ['./user-grades.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input()
  subjectId: number = 0;
  subjectType: string = "subject";

  @Input()
  grade : number = 0;

  userGrades: Array<grade> = [];

  constructor(private http : HttpClient, private gservice: GradeService, private gbservice: GlobalService) { }

  ngOnInit(): void {
    // Shows ALL grades of USER
    this.gservice.getGrades().subscribe(data => {this.userGrades = data;
    console.log(data)});}

    //this translates the subjectID to subjectType
    // this.http.get<subject> ("https://632cb92f519d17fb53b2cfb1.mockapi.io/subjects/" + this.subjectId).subscribe(data => this.subjectType = data.subjectType);
  }

// TRYING TO GET IT INTO SERVICE - DOES NOT WORK
  // constructor(private sservice : SubjectService) { }
  // ngOnInit(): void {
  //   this.sservice.getSubjectsById(this.subjectID)
  //   this.sservice.getSubjects().subscribe(data => console.log(data));
  // }


  