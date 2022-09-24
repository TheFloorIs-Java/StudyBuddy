import { Component, OnInit, Input} from '@angular/core';
import { homework } from '../model/homework';
import { GlobalServiceService } from '../services/global-service.service';
import { HomeworkServiceService } from '../services/homework-service.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-homework-component',
  templateUrl: './homework-component.component.html',
  styleUrls: ['./homework-component.component.css']
})
export class HomeworkComponentComponent implements OnInit {
  
  constructor(public gservice :GlobalServiceService, private hservice : HomeworkServiceService, 
    private router: Router) { }
  homeworkArray : Array<homework> = [];
 addNewItem : string="";
 itemCompleted : string ="";
 message : string ="";
  //the subject will be an input for the homework Component
  @Input() 
  Subject : string ="";
  
  ngOnInit(): void {
    this.hservice.getAllHw().subscribe(data => this.homeworkArray=data);
    
  }

 //gets specific HW depending on the subject and user, it will return am Array of hwItem Strings
 getHwForSubject() : Array<string>{
  let answer = new Array<string>;
  for (let  i=0 ; i< this.homeworkArray.length; i++){
      if(this.homeworkArray[i].name==this.gservice.currentUserName && this.homeworkArray[i].subject==this.Subject){
        answer.push(this.homeworkArray[i].hwItem);
      }
  }
  return answer;
}

// Selected(itemSelected :string ){
//  this.itemCompleted =itemSelected;
// }

complete(){
  this.message = this.itemCompleted + " will be added to complete when completed";
}
//adds and refreshes
addItemToHomework(){
  this.hservice.addHwItemForSubject(this.Subject,this.addNewItem);
}

}
