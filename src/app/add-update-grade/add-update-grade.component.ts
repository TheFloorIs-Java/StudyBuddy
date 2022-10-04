import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { grade } from '../model/grade';
import { GradeServiceService } from '../services/grade-service.service';

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
  buttonClicked : EventEmitter<any> = new EventEmitter<any>;
  @Output()
  addClicked: EventEmitter<any> = new EventEmitter <any>;

  constructor(private gservice: GradeServiceService) { }

  //DISPLAY ALL GRADES OF THE USER ON LOAD
  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.gradeArray = data);
  }

  //TO REFRESH WINDOW
  refresh(): void {location.reload()}

  //ADD SUBJECT AND GRADE VIA DROP DOWN
  add(): void {
    //SELECTING THE DROP DOWN FROM HTML
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    //GRABBING THE VALUE OF THE DROP DOWN
    let subjectIdInput = Number(dropdown.value);
    //RUNS THROUGH THE ARRAY OF GRADES TO SEE IF THERE ARE ANY MATCHING subjectID, IF EXISTS IT WILL DISPLAY AN ERROR MESSAGE
 this.gservice.addGrades(subjectIdInput, this.grade);
 this.addClicked.emit();
    for (let i = 0; i < this.gradeArray.length; i++){
      if (this.gradeArray[i].subjectId == subjectIdInput) {
        let error = <HTMLDivElement>document.getElementById("error");
        let errMess = document.createElement("p");
        errMess.innerText = "Subject Already Exists"
        error.appendChild(errMess);
        }
      }
        
  }


  //this is actively looking up the gradeId while user is picking subject
  lookUpGradeId(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    let subjectIdInput = Number(dropdown.value);
        this.gservice.getGradeId(subjectIdInput).subscribe(response => { this.modifyGrade = response; console.log(response) })
  }

  // UPDATE EXISTING GRADE
  update(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    let subjectIdInput = Number(dropdown.value);
    this.gservice.getGradeId(subjectIdInput).subscribe(response => { this.modifyGrade = response; 
      this.gservice.update(this.modifyGrade.gradeId, subjectIdInput, this.grade); this.buttonClicked.emit();});
      let error = <HTMLDivElement>document.getElementById("error");
      error.innerHTML="";
     
  }
}
