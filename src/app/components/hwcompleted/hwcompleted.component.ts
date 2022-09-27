import { Component, Input, OnInit } from '@angular/core';
import { hwcompleted } from 'src/app/model/hwcompleted';
import { HwCompletedServiceService } from 'src/app/services/hw-completed-service.service';

@Component({
  selector: 'app-hwcompleted',
  templateUrl: './hwcompleted.component.html',
  styleUrls: ['./hwcompleted.component.css']
})
export class HwcompletedComponent implements OnInit {
  
  @Input()
  CompletedHomework : hwcompleted = {
    userId: 0,
    subjectID: 0,
    hwcompleted: ''
  };


  constructor( public hwservice : HwCompletedServiceService){}

   ngOnInit(): void {
  }
}

