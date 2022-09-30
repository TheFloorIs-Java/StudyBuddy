import { subject } from './../model/tips';
import { TipsComponent } from './../tips/tips.component';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TipServiceService {

    
  constructor(private http: HttpClient){
  
  }

  getAllTips()  :  Observable<Array <any>>{
    return this.http.get<Array<any>>("http://localhost:8000/subjects");
  }
  getTipsBySubjectName(name:String) :Observable<subject>{
    return this.http.get<subject>("http://localhost:8000/subjects/name/"+name);
    
}
}
   

