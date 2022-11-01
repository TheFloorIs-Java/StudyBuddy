import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { grade } from '../../../model/grade';
import { GradeServiceService } from '../../../services/grade-service.service';

@Component({
  selector: 'app-add-update-grade',
  templateUrl: './add-update-grade.component.html',
  styleUrls: ['./add-update-grade.component.css']
})
export class AddUpdateGradeComponent implements OnInit {

  gradeArray: Array<grade> = [];

  modifyGrade: grade = {
    gradeId: 0,
    userId: 0,
    subjectId: 0,
    grade: 0
  };

  @Input()
  subjectId: number = 0;

  @Input()
  grade: number = 0;

  @Output()
  buttonClicked: EventEmitter<any> = new EventEmitter<any>;

  @Output()
  addClicked: EventEmitter<any> = new EventEmitter<any>;

  constructor(private gservice: GradeServiceService) { }

  /**
   * On page load, it will display all the user's grades
   */
  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.gradeArray = data);
  }

  /**
   * When the user clicks on the add button, it will run the Grade Service to communicate to our API to perform an HTTP POST Request to add a new grade
   * It will also prevent users from adding a subject that already exists
   */
  add(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    let subjectIdInput = Number(dropdown.value);
    this.gservice.addGrades(subjectIdInput, this.grade);
    this.addClicked.emit();
    for (let i = 0; i < this.gradeArray.length; i++) {
      if (this.gradeArray[i].subjectId == subjectIdInput) {
        let error = <HTMLDivElement>document.getElementById("error");
        let errMess = document.createElement("p");
        errMess.innerText = "Subject Already Exists"
        error.appendChild(errMess);
      }
    }
  }

  /**
   * This function actively is looking up the gradeId of the grade in our database as the user is selecting the subject
   */
  lookUpGradeId(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    let subjectIdInput = Number(dropdown.value);
    this.gservice.getGradeId(subjectIdInput).subscribe(response => { this.modifyGrade = response; console.log(response) })
  }

  /**
   * When user clicks on the Update button, it will run the Grade Service to communicate to our API to perform an HTTP PUT Request to update a grade
   */
  update(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    let subjectIdInput = Number(dropdown.value);
    this.gservice.getGradeId(subjectIdInput).subscribe(response => {
      this.modifyGrade = response;
      this.gservice.update(this.modifyGrade.gradeId, subjectIdInput, this.grade); 
      this.buttonClicked.emit();
    });
    let error = <HTMLDivElement>document.getElementById("error");
    error.innerHTML = "";
  }
}
