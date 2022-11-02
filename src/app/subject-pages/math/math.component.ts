import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
/**
 * 
 * @param gservice when the user select math it retrive data from 
 * global service  and/or  save new info to global service 
 */
  constructor(public gservice : GlobalServiceService) { }
  Math : string = "Math";
  mathNum : number = 1;
  ngOnInit(): void {
  }

}
