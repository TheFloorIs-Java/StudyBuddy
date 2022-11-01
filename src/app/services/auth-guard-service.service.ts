import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GlobalServiceService } from './global-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private router: Router, private gservice: GlobalServiceService) { }

  /**
   * canActivate checks to see if a user is logged in or not
   *If user is not logged in, there will be alert that will state that you must be logged in to view this page
   * and it will redirect you to the login page
   * If user is logged in the user will proceed as usual, being able to view the home page and access the different paths on the nav bar
   * @param route 
   * @param state 
   * @returns 
   */
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.gservice.isLoggedIn()) {
      alert('You are not allowed to view this page until you log in');
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
