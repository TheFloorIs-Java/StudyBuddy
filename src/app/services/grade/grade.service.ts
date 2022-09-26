import { GlobalService } from './../global/global.service';
import { user } from './../../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { grade } from 'src/app/model/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient, private gbservice: GlobalService) { 
    // this.getGrades().subscribe(data => this.allGrades = data);
    }
  allGrades: Array<grade> = [];
  
  // GET ALL GRADES
  getGrades(): Observable<Array<grade>> {
    return this.http.get<Array<grade>>(
      "https://632cb92f519d17fb53b2cfb1.mockapi.io/grade/");
  }

  // GET GRADES BY USERID
  // BROKEN
  /* getGradesByUserId(userId:number) {
    return this.http.get<Array<grade>> (
          "https://632cb92f519d17fb53b2cfb1.mockapi.io/grade/" + userId
        ).subscribe(data => userId = data.userId)
  }
  */

  // getGradesByUser(userId: number){
  // this.userGrades = new Array<string>;
  // for(let i=0; i<this.allGrades.length; i++){
  //   if(this.allGrades[i].userId == this.gbservice.currentUserId && this.allGrades[i].grade==userId){this.userGrades.push(this.allGrades[i].userId)}
  // }
}
