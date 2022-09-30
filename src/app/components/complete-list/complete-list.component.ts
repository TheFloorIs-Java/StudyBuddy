import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { complete } from 'src/app/model/complete';
import { CompleteServiceService } from 'src/app/services/complete-service.service';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.css']
})
export class CompleteListComponent implements OnInit {
  
  completehomework : Array<complete> = [];

  constructor(private router: Router, private route: ActivatedRoute, private cservice : CompleteServiceService) { }

  ngOnInit(): void {
    this.cservice.getHwCompletedByUserAndSubjectId(1,1).subscribe(
      data =>{this.completehomework= data;});
      console.log(this.completehomework) 
  }
  uploadComplete(){
    this.cservice.getHwCompletedByUserAndSubjectId(1,1).subscribe(
      data =>{this.completehomework= data;});
      console.log(this.completehomework)
  }

    getHwCompletedByUserAndSubjectId(){
      this.completehomework = new Array<complete>;
  }
}