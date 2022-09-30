import { subject } from 'src/app/model/subject';
import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { GlobalService } from 'src/app/services/global/global.service';
import { GradeService } from 'src/app/services/grade/grade.service';
import { grade } from 'src/app/model/grade';

@Component({
  selector: 'app-add-update-grade',
  templateUrl: './add-update-grade.component.html',
  styleUrls: ['./add-update-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  gradeArray: Array<grade> = [];
  @Input()
  subjectId: number = 0;
  subjectIdInput: number = this.subjectId;

  @Input()
  grade: number = 0;

  constructor(private gservice: GradeService, private gbservice: GlobalService) { }

  ngOnInit(): void {
    this.gservice.getGrades().subscribe(data => this.gradeArray = data);
  }

  add(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("subjectId");
    let subjectIdInput = Number(dropdown.value);

    //IF SUBJECT ID ALREADY EXISTS, IT SHOULD NOT BE ABLE TO ADD
    if (this.gradeArray.filter(data => { console.log(data.subjectId + "!"); data.subjectId })) { console.log("!") }
    console.log((subjectIdInput));
    this.gservice.addGrades(subjectIdInput, this.grade);

  }


}


