import { Component, Input, OnInit } from '@angular/core';
import { complete } from '../model/complete';
import { CompleteServiceService } from '../services/complete-service.service';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  completehomework : Array<complete> = [];

  constructor( private cservice : CompleteServiceService, private gservice: GlobalServiceService) { }
@Input()
SubjectNum: number =1;
@Input()
Subject : string = "";
  ngOnInit(): void {
    this.cservice.getHwCompletedByUserAndSubjectId(this.gservice.currentUserId,this.SubjectNum).subscribe(
      data =>{this.completehomework= data;});
      console.log(this.completehomework) 
  }
  public uploadComplete(){
    this.cservice.getHwCompletedByUserAndSubjectId(this.gservice.currentUserId,this.SubjectNum).subscribe(
      data =>{this.completehomework= data;});
      console.log(this.completehomework)
  }


     

}
