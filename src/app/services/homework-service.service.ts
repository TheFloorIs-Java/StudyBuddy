import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalServiceService } from './global-service.service';
import { homework } from '../model/homework';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {

  constructor(private http: HttpClient, private gservice: GlobalServiceService,
    private sservice: SubjectService) {
    this.getAllHw().subscribe(data => this.homeworkArray = data);
  }

  homeworkArray: Array<homework> = [];
  /**
     * HTTP GET Request - Retrieve all HW data from the homework database
     * @returns an array of the homework data with all the information
     */
  getAllHw(): Observable<Array<homework>> {
    return this.http.get<Array<homework>>("http://localhost:8051/homework");
  }

  /**
   * HTTP GET Request - Retrieve all HW data from the homework database based on the current user logged in
   * @returns an array of the homework data with all the information based on the current user logged in
   */
  getAllHwByUser(): Observable<Array<homework>> {
    return this.http.get<Array<homework>>("http://localhost:8051/homework/user/" + this.gservice.currentUserId);
  }

  /**
  * HTTP GET Request - Retrieve all HW data from the homework database based on the current user logged in and subject
  * @returns an array of the homework data with all the information based on the current user logged in and subject
  */
  getHwForSubject(subjectIn: string): Observable<Array<homework>> {
    return this.http.get<Array<homework>>("http://localhost:8051/homework/" + this.gservice.currentUserId + "/" + this.sservice.getSubjectByName(subjectIn));
  }
  // returnHwSubject(subjectin : string ): Array<homework>{
  //   return null;
  // }

  /**
   * HTTP POST Request - To add a homework for the current user and the current subject they are currently viewing
   * @param subjectIn - The subject they are currently viewing
   * @param hwItemIn - The homework they would like to add
   */
  addHwItemForSubject(subjectIn: string, hwItemIn: string): void {
    this.getAllHw().subscribe(data => this.homeworkArray = data);
    this.http.post<any>("http://localhost:8051/homework",
      { userId: this.gservice.currentUserId, subjectId: this.sservice.getSubjectByName(subjectIn), hwItem: hwItemIn }).subscribe(data => console.log(data));
    this.getAllHw().subscribe(data => this.homeworkArray = data);
  }

  /**
   * HTTP DELETE Request - To delete a homework based on hwId
   * @param hwIn - Homework input used to retrieve the hwId of the homework added by user
   */
  deleteHwItem(hwIn: string) {
    this.getAllHw().subscribe(data => this.homeworkArray = data);
    this.http.get<any>("http://localhost:8051/homework/" + this.getIdHw(hwIn)).subscribe(data => console.log(data));
    this.getAllHw().subscribe(data => this.homeworkArray = data);
  }

  /**
   * HTTP GET Request - Retrieve heId based on the users homework input(hwIn)
   * @param hwIn - The user's homework input
   * @returns - The hwId
   */
  getIdHw(hwIn: string): number {
    this.getAllHw().subscribe(data => this.homeworkArray = data);
    console.log(this.homeworkArray);
    for (let i = 0; i < this.homeworkArray.length; i++) {
      console.log(this.gservice.currentUserId)
      console.log(hwIn + " " + i + "     " + this.homeworkArray[i].hwItem);
      console.log(hwIn == this.homeworkArray[i].hwItem);
      if (this.homeworkArray[i].hwItem == hwIn && this.homeworkArray[i].userId == this.gservice.currentUserId) {
        console.log(this.homeworkArray[i].hwId)
        return this.homeworkArray[i].hwId;
      }
    }
    return this.homeworkArray.length;
  }

}
