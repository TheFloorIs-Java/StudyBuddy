import { HttpClient } from '@angular/common/http';
import { subject } from './../../model/subject';
import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input()
  subjectID: number = 0;
  subjectType: string = "subject";

  @Input()
  grade : number = 0;

  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    //this translates the subjectID to subjectType
    this.http.get<subject> ("https://632cb92f519d17fb53b2cfb1.mockapi.io/subjects/" + this.subjectID).subscribe(data => this.subjectType = data.subjectType);
  
  }

// TRYING TO GET IT INTO SERVICE - DOES NOT WORK
  // constructor(private sservice : SubjectService) { }
  // ngOnInit(): void {
  //   this.sservice.getSubjectsById(this.subjectID)
  //   this.sservice.getSubjects().subscribe(data => console.log(data));
  // }


}
