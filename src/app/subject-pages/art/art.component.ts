import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
/**
 * 
 * @param gservice when the user select art it retrive data like art home word report card and tips  from 
 * global service  and/or  save new  added info to global service 
 */
  constructor(public gservice : GlobalServiceService) { }
  Art : string = "Art";
  artNum : number = 6;
  ngOnInit(): void {
  }
}
