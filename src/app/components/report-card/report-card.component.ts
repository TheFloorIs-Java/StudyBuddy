import { Component, Input, OnInit } from '@angular/core';
import { grade } from 'src/app/model/grade';
import { GradeService } from 'src/app/services/grade/grade.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css'],
})
export class ReportCardComponent implements OnInit {
  //PARENT

  @Input()
  subjectId: number = 0;
  subjectName: string = "";

  @Input()
  grade: number = 0;

  userGrades: Array<grade> = [];

  constructor(private gservice: GradeService) { }

  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);
  }
  //this is running before the actual update function - thats why we need to click twice
  updateThings(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);
    for(let i = 0; i < this.userGrades.length; i++)
    if(this.userGrades[i].grade !== this.grade)
       {
        console.log("update things"); 
        this.gservice.getGrades().subscribe(data => this.userGrades = data);}
      
  }
}
