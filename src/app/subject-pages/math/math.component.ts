import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../services/global-service.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor(public gservice : GlobalServiceService) { }
  Math : string = "Math";
  mathNum : number = 1;
  ngOnInit(): void {
  }

}
