import { Component, Input, OnInit } from '@angular/core';
import { tips } from 'src/app/model/tips';
import { TipsServiceService } from 'src/app/services/tips-service.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  
  tipadd: any =  "";
  postTip: any = [];
  
  constructor(private tservice : TipsServiceService) { }

  ngOnInit(): void {
  }
  //tip = "";
  //postTips = [""];
  post() {
  this.postTip.push(this.tipadd);
   this.tipadd = "";
  
  }
}
//tip = "";
  //postTips = [""];
//post(): void{
   // //(this.tip, this.addNewTip);

// this.tipadd = new Array<tips>;
//@Input()
  //tip: any[] | undefined;
/*
  tipadd: Array<tips> =[];
  
  tip = "";
  postTips = [""];
  post(){
  this.postTips.push(this.tip);
  this.tip = "";
  
  }
*/