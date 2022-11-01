import { Component, Input, OnInit } from '@angular/core';
import { grade } from '../../../model/grade';
import { GradeServiceService } from '../../../services/grade-service.service';

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

  constructor(private gservice: GradeServiceService) { }

  /**
   * On page load, it will display all the user's grades
   */
  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);
  }

  /**
   * When the User clicks the Add button, it will emit to this parent component so it will know that there has been a change and it should reload the data
   */
  addThings(): void {
    console.log("add things");
    this.gservice.getGrades().subscribe(data => this.userGrades = data);
    for (let i = 0; i < this.userGrades.length; i++)
      if (this.userGrades[i].subjectId !== this.subjectId) {
        console.log("add things");
        this.gservice.getGrades().subscribe(data => this.userGrades = data);
      }
  }

  /**
 * When the User clicks the Update button, it will emit to this parent component so it will know that there has been a change and it should reload the data
 */
  updateThings(): void {
    this.gservice.getGrades().subscribe(data => this.userGrades = data);
    for (let i = 0; i < this.userGrades.length; i++)
      if (this.userGrades[i].grade !== this.grade) {
        console.log("update things");
        this.gservice.getGrades().subscribe(data => this.userGrades = data);
      }
  }
}
