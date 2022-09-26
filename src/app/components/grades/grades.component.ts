import { grade } from './../../model/grade';
import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/services/grade/grade.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades: Array<grade> = [];
  constructor(private gservice: GradeService) { }

  ngOnInit(): void {
    // Shows ALL grades
    this.gservice.getGrades().subscribe(data => this.grades = data);

    }
  }   

    // Show User's grades
    // getGradesByUser() : Array < string > {
    //   this.gservice.getGradesByUser(this.userId);
    //   return this.gservice.userGrades;
    // }


// THINGS I TRIED
/*
    this.gservice.getGradesByUserId(1);
    console.log(this.grades);
    this.grades = new Array<grade>;
    this.gservice.getGrades().forEach(value => {
    this.grades.push(value);   
    console.log(value)
*/