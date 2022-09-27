
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { hwcompleted } from 'src/app/model/hwcompleted';
import { HwCompletedServiceService } from 'src/app/services/hw-completed-service.service';

@Component({
  selector: 'app-hwcompleted-list',
  templateUrl: './hwcompleted-list.component.html',
  styleUrls: ['./hwcompleted-list.component.css']
})
export class HwcompletedListComponent implements OnInit {

  completedhomework : Array<hwcompleted> = [];
  completedhwSubID: Array<hwcompleted> = [];
  userIdhwcompleted: Array<hwcompleted> = [];

  constructor(private hwservice : HwCompletedServiceService) { }

  ngOnInit(): void {
    this.hwservice.getAllHwCompleted().subscribe(
      data => {this.completedhomework= data; console.log(data)});
  }
  getHwCompletedForSubjectID(subjectID: number){
    this.completedhwSubID = new Array<hwcompleted>;
  }
  getHwCompletedForUserId(userId: number){
    this.userIdhwcompleted= new Array<hwcompleted>;
  }
}



/*
  gethwCompletedBySubject() : Array<number>{
    let answer = new Array<hwcompleted>;
    for (let  i=0 ; i< this.hwcompleted.length; i++){
        if(this.hwcompleted[i].hwcompleted==this.hservice.hwcompleted && this.hwcompleted[i].subjectID==this.subjectID){
          answer.push(this.hwcompleted[i]);
        }
    }
    return answer;
  }
  }

}
*/
