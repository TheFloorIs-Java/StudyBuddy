import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Math : string = "Math";
  constructor() { }

  ngOnInit(): void {
    // this.sservice.getAllSubjects();
    // console.log("did it");
    // console.log(this.sservice.getSubjectByName(this.Math))
  }

}
