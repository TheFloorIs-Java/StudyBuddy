import { Component, OnInit, Input } from '@angular/core';
import { homework } from '../../model/homework';
import { GlobalServiceService } from '../../services/global-service.service';
import { HomeworkServiceService } from '../../services/homework-service.service';
import { CompleteComponent } from '../complete/complete.component';
import { CompleteServiceService } from '../../services/complete-service.service';

@Component({
  providers: [CompleteComponent],

  selector: 'app-homework-component',
  templateUrl: './homework-component.component.html',
  styleUrls: ['./homework-component.component.css']
})

export class HomeworkComponentComponent implements OnInit {

  homeworkArray: Array<homework> = [];

  constructor(public gservice: GlobalServiceService,
    private hservice: HomeworkServiceService, private c: CompleteComponent,
    private cservice: CompleteServiceService) { }

  addNewItem: string = "";
  itemCompleted: string = "";
  message: string = "";

  /**
   * the subject will be an input for the homework Component
   */
  @Input()
  Subject: string = "";

  /**
   * On page load, it will load all the hw for the current user and the subject they are on into the homeworkArray, so they may use that information as needed
   */
  ngOnInit(): void {
    this.hservice.getHwForSubject(this.Subject).subscribe(data => { this.homeworkArray = data; console.log(data) });
  }


  public trackHw(index: number, item: homework): string {
    return item.hwItem;
  }
  //gets specific HW depending on the subject and user, it will return am Array of hwItem Strings
  //  getHwForSubject() : Observable<Array<homework>>{
  //   return this.hservice.getHwForSubject(this.Subject);
  // }

  complete() {
    if (this.itemCompleted == "" && this.homeworkArray.length > 0) {
      this.itemCompleted = this.homeworkArray[0].hwItem;
      this.hservice.deleteHwItem(this.itemCompleted);
      for (let i = 0; i < this.homeworkArray.length; i++) {
        if (this.homeworkArray[i].hwItem == this.itemCompleted) {
          this.homeworkArray.splice(i, 1);
        }
      }
    } else if (this.itemCompleted != "") {
      this.hservice.deleteHwItem(this.itemCompleted);
      for (let i = 0; i < this.homeworkArray.length; i++) {
        if (this.homeworkArray[i].hwItem == this.itemCompleted) {
          this.homeworkArray.splice(i, 1);
        }
      }
    }
  }

  /**
   * When user clicks the Add to Homework button, it will communicate with the Homework Service to communicate ot our API to perform an HTTP POST Request to add a new homework and to refresh the list of homeworks
   */
  addItemToHomework() {
    if (this.addNewItem != "") {
      this.hservice.addHwItemForSubject(this.Subject, this.addNewItem);
      this.homeworkArray.push({ userId: this.gservice.currentUserId, subjectId: 0, hwId: 0, hwItem: this.addNewItem });
      this.addNewItem = "";
    }
  }

}
