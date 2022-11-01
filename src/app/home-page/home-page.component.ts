import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  s: any = '2022-10-11T20:32:43.937+00:00';
  constructor() { }
  blah: string = "hi";
  ngOnInit(): void {
    console.log(this.changeTime(this.s));
  }
  changeTime(str: any): string {
    let d1 = str.slice(0, 10); //date but in year/month/day form
    let dArray = d1.split('-');
    let date = dArray[1] + "/" + dArray[2] + "/" + dArray[0] //now in month/day/year
    let time = str.slice(11, 16)
    return "Date: " + date + "  Time: " + time;
  }

}
