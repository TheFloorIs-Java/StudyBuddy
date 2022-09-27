
import { Component, OnInit } from '@angular/core';
import { hwcompleted } from 'src/app/model/hwcompleted';
import { HwCompletedServiceService } from 'src/app/services/hw-completed-service.service';

@Component({
  selector: 'app-hwcompleted-list',
  templateUrl: './hwcompleted-list.component.html',
  styleUrls: ['./hwcompleted-list.component.css']
})
export class HwcompletedListComponent implements OnInit {

  completedhomework : Array<hwcompleted> = [];

  constructor(private hwservice : HwCompletedServiceService) { }

  ngOnInit(): void {
    this.hwservice.getAllHwCompleted().subscribe(
      data => {this.completedhomework= data; console.log(data)});
  }
}
  /*
  getHwCompletedBySubject() : Array<number>{
    this.hwservice.getHwCompleteBySubject(this.Subject);
    return this.hwservice.subjectID;
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
