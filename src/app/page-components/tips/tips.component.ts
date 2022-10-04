import { Component, Input, OnInit } from '@angular/core';
import { subject } from '../../model/subject';
import { TipServiceService } from '../../services/tip-service.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
@Input()
  Subject : string ="";
  tn :  subject = {subjectId :1,subjectName:"Math",tips:"dd"};
  constructor(private tservice: TipServiceService) { }

  ngOnInit(): void {
    this.tservice.getTipsBySubjectName(this.Subject).subscribe(data =>this.tn=data);
    console.log(this.tn);
  }
}
