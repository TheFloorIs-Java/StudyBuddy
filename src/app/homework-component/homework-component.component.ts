import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { homework } from '../model/homework';
import { GlobalServiceService } from '../services/global-service.service';
import { HomeworkServiceService } from '../services/homework-service.service';
import {  Router } from '@angular/router';
import { AuthGuardServiceService } from '../services/auth-guard-service.service';

@Component({
  selector: 'app-homework-component',
  templateUrl: './homework-component.component.html',
  styleUrls: ['./homework-component.component.css']
})
export class HomeworkComponentComponent implements OnInit {
  
  constructor(public gservice :GlobalServiceService,
     private hservice : HomeworkServiceService) {}

  homeworkArray : Array<homework> = [];
  
 addNewItem : string="";
 itemCompleted : string ="";
 message : string ="";
  //the subject will be an input for the homework Component
  @Input() 
  Subject : string ="";
  
  ngOnInit(): void {
   // this.hservice.getAllHw().subscribe(data => this.homeworkArray=data);
  
  }

public trackHw(index: number, item: homework): string{
  return item.hwItem;
}
 //gets specific HW depending on the subject and user, it will return am Array of hwItem Strings
 getHwForSubject() : Array<string>{
  this.hservice.getHwForSubject(this.Subject);
  return this.hservice.homeworkItem;
}

complete(){
  this.message = this.itemCompleted + " will be added to complete when completed";
  this.hservice.deleteHwItem(this.itemCompleted);
}
//adds and refreshes
addItemToHomework(){
  this.hservice.addHwItemForSubject(this.Subject,this.addNewItem);
}


}
