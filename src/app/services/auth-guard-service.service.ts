import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree} from '@angular/router';
import { GlobalServiceService } from './global-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor( private router: Router, private gservice: GlobalServiceService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
      //check if logged in
      if (!this.gservice.isLoggedIn())  {
          alert('You are not allowed to view this page until you log in');
          //redirect to login
          this.router.navigateByUrl('');
          //return false to cancel the navigation
          return false;
      } 
    return true;
  }
}
