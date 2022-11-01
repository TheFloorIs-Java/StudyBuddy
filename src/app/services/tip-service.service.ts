import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class TipServiceService {

  constructor(private http: HttpClient) { }

  /**
   * HTTP GET Request - Retrieve all tips data from the subject database based on the subject name
   * @param name - The name of the subject
   * @returns subject based on the name parameter provided
   */
  getTipsBySubjectName(name: String): Observable<subject> {
    return this.http.get<subject>("http://localhost:8051/subjects/name/" + name);

  }
}
