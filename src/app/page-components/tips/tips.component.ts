import { Component, Input, OnInit } from '@angular/core';
import { subject } from '../../model/subject';
import { TipServiceService } from '../../services/tip-service.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  /**
   * in this section we connect child class and parent class by  using @Input and 
   * retrive data from our tip service  
   */
@Input()
  Subject : string ="";
  tn :  subject = {subjectId :1,subjectName:"Math",tips:"dd"};
  constructor(private tservice: TipServiceService) { }
   /**
    * user get different tip for each subject one user going to get tip de
    */
  ngOnInit(): void {
    this.tservice.getTipsBySubjectName(this.Subject).subscribe(data =>this.tn=data);
    console.log(this.tn);
  }
}
