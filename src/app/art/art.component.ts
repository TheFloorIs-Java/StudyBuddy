import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  constructor(public gservice : GlobalServiceService) { }
  Art : string = "Art";
  artNum : number = 6;
  ngOnInit(): void {
  }
}
