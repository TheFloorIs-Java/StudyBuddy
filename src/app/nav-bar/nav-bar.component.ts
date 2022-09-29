import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isMenuOpened: boolean = false;
  menuToggle(): void{
    this.isMenuOpened = !this.isMenuOpened;
  }
   constructor(){
    
   }

  ngOnInit(): void {
  }

 
  }

