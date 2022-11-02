import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
/**
 * 
 * @param gservice when the user select science it retrive data like science home word report card and tips  from 
 * global service  and/or  save new  added info to global service 
 */
  constructor(public gservice : GlobalServiceService) { }
  Science : string = "Science";
  scienceNum : number = 2;
  ngOnInit(): void {
  }

}
