import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hwcompleted } from '../model/hwcompleted';

@Injectable({
  providedIn: 'root'
})
export class HwCompletedServiceService {

  
  constructor(private http : HttpClient){

  }
    getAllHwCompleted() : Observable<Array<hwcompleted>>{
    return this.http.get<Array<hwcompleted>>("https://63312b4c3ea4956cfb580ba4.mockapi.io/hwcompleted");
  
  }
}