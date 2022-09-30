import { grade } from '../../model/grade';
import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/services/grade/grade.service';

import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class GradesComponent implements OnInit {
 
 
  constructor(){}

  ngOnInit(): void {
    
  }
  
}  
