import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
/**
 * For the dropdown menu we have in our nav bar
 */
  isMenuOpened: boolean = false;
  menuToggle(): void{
    this.isMenuOpened = !this.isMenuOpened;
  }

  constructor(private gservice : GlobalServiceService) { }

  name : String = "";

  ngOnInit(): void {
    this.name =this.gservice.currentUserName;
  }
}
