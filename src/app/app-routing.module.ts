import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [{path: '',component: LogInPageComponent },
{path: 'signIn',component: SignInPageComponent } , { path: 'home', component: HomePageComponent, canActivate : [AuthGuardServiceService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 