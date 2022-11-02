import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../services/global-service.service';
import { HomeworkServiceService } from '../services/homework-service.service';
import { SubjectService } from '../services/subject.service';
import { homework } from '../model/homework';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  isMenuOpened: boolean = false;

  menuToggle(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  constructor(private gservice: GlobalServiceService, private subService: SubjectService, private homService: HomeworkServiceService) { }

  mathnum: number = 0;
  name: String = "";
  homeworkList: Array<homework> = [];
  subArray: Set<String> = new (Set);
  anyHomework: boolean = false;

  /**
   * On page load, it will welcome the user by their name, and load the subject that the user has homework due
   */
  ngOnInit(): void {
    this.homService.getAllHwByUser().subscribe(data => {
      this.homeworkList = data;
      for (let i = 0; i < this.homeworkList.length; i++) {
        this.subArray.add(this.subService.getSubjectById(this.homeworkList[i].subjectId))
      };
      if (this.subArray.size > 0) {
        this.anyHomework = true;
      } else {
        this.anyHomework = false;
      }
    });
    this.name = this.gservice.currentUserName;
  }
}
