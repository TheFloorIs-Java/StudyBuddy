import { Component, Input, OnInit } from '@angular/core';
import { grade } from '../model/grade';
import { GradeServiceService } from '../services/grade-service.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input()
  subjectId: number = 0;
  subjectName: string = "";

  @Input()
  grade: number = 0;

  userGrades: Array<grade> = [];
 
  constructor(private gservice: GradeServiceService){}

  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);

  }

  updateThings() :void{
    this.gservice.getGrades().subscribe(data => {this.userGrades = data; console.log(data)});
  }
}
