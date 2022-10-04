import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(public gservice : GlobalServiceService) { }
  Science : string = "Science";
  scienceNum : number = 2;
  ngOnInit(): void {
  }

}
