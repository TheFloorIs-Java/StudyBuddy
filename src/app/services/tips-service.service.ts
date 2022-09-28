import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tips } from '../model/tips';
import { TipsComponent } from '../components/tips/tips.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipsServiceService {

  constructor(private http: HttpClient){ 

  }
addNewTip(tipsInput:String)  : void {
  this.http.post<any>("https://63312b4c3ea4956cfb580ba4.mockapi.io/hwcompleted",
  {tips:tipsInput, subjectID:0}).subscribe((data: any)=>console.log(data));
  }
}
