import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { homework } from '../model/homework';
import { GlobalServiceService } from '../services/global-service.service';
import { HomeworkServiceService } from '../services/homework-service.service';
import {  Router } from '@angular/router';
import { AuthGuardServiceService } from '../services/auth-guard-service.service';
import { Observable } from 'rxjs';
import { CompleteComponent } from '../complete/complete.component';
import { CompleteServiceService } from '../services/complete-service.service';

@Component({
  providers:[CompleteComponent ],
  selector: 'app-homework-component',
  templateUrl: './homework-component.component.html',
  styleUrls: ['./homework-component.component.css']
})
export class HomeworkComponentComponent implements OnInit {
  homeworkArray : Array<homework> = [];
  constructor(public gservice :GlobalServiceService,
     private hservice : HomeworkServiceService, private c : CompleteComponent,
     private cservice: CompleteServiceService) {}


  
 addNewItem : string="";
 itemCompleted : string ="";
 message : string ="";
  //the subject will be an input for the homework Component
  @Input() 
  Subject : string ="";
  
  ngOnInit(): void {
  this.hservice.getHwForSubject(this.Subject).subscribe(data=>{this.homeworkArray=data; console.log(data)});
  }
  
public trackHw(index: number, item: homework): string{
  return item.hwItem;
}
 //gets specific HW depending on the subject and user, it will return am Array of hwItem Strings
//  getHwForSubject() : Observable<Array<homework>>{
//   return this.hservice.getHwForSubject(this.Subject);
// }

complete(){
  if(this.itemCompleted!=""){
    this.hservice.deleteHwItem(this.itemCompleted);
    for(let i =0; i<this.homeworkArray.length; i++){
      if(this.homeworkArray[i].hwItem==this.itemCompleted){
        this.homeworkArray.splice(i,1);
      }
    }
}
}

//adds and refreshes
addItemToHomework(){
  if(this.addNewItem!=""){
  this.hservice.addHwItemForSubject(this.Subject,this.addNewItem);
  this.homeworkArray.push({userId: this.gservice.currentUserId, subjectId: 0, hwId: 0, hwItem: this.addNewItem});
  this.addNewItem="";
  }

}


}
