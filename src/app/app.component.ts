import { subject } from './model/tips';
import { TipServiceService } from './services/tip-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudyBuddy';
  constructor(private  TipServiceService: TipServiceService){

  }
  ngOnInit(){
    this.TipServiceService.getAllTips().subscribe(

    data=>console.log(data));

    }
    
  }

