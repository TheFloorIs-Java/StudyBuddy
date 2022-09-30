import { Component, OnInit } from '@angular/core';
import { complete } from 'src/app/model/complete';
import { CompleteServiceService } from 'src/app/services/complete-service.service';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.css']
})
export class CompleteListComponent implements OnInit {
  
  completehomework : Array<complete> = [];

  constructor(private cservice : CompleteServiceService) { }

  ngOnInit(): void {
    this.cservice.getHwCompletedByUserAndSubjectId(1,1).subscribe(
      data =>{this.completehomework= data;});
      console.log(this.completehomework)
    }
    getHwCompletedByUserAndSubjectId(){
      this.completehomework = new Array<complete>;
  }
}
