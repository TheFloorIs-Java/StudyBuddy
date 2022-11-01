import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css']
})
export class PhysicsComponent implements OnInit {
/**
 * 
 * @param gservice when the user select physics it retrive data from 
 * global service  and/or  save new info to global service 
 */
  constructor(public gservice : GlobalServiceService) { }
  Physics : string = "Physics";
  physicsNum : number = 5;
  ngOnInit(): void {
  }

}
