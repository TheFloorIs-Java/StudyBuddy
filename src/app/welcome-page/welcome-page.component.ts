import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private gservice : GlobalServiceService) { }

  name : String = "";
  ngOnInit(): void {
    this.name =this.gservice.currentUserName;
  }

}
