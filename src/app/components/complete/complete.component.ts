import { Component, Input, OnInit } from '@angular/core';
import { complete } from 'src/app/model/complete';
import { CompleteServiceService } from 'src/app/services/complete-service.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
uploadComplete() {
throw new Error('Method not implemented.');
}
  
  @Input()
  CompleteHomework: complete = {
    completeId: 0,
    userId : 0,
    subjectId : 0,
    completeItem: ""

  }

  constructor(public cservice : CompleteServiceService) { }

  ngOnInit(): void {
  }

}
