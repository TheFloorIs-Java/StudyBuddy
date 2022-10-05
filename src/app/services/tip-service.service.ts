import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class TipServiceService {
  

  constructor(private http : HttpClient) { }

  getTipsBySubjectName(name:String) :Observable<subject>{
    return this.http.get<subject>("http://localhost:8050/subjects/name/"+name);
  
  }
}
