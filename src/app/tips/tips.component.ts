import { TipServiceService } from './../services/tip-service.service';
import { subject } from './../model/tips';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  @Input()
  sub : string ="";
  tn :  subject = {subjectId :1,subjectName:"Math",tips:"dd"};
  constructor(private tservice: TipServiceService) { }

  ngOnInit(): void {
    this.tservice.getTipsBySubjectName(this.sub).subscribe(data =>this.tn=data);
    console.log(this.tn);
  }

}
