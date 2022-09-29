import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { MathComponent } from './math/math.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [{path: '',component: HomePageComponent },
{path: 'signIn',component: SignInPageComponent } ,
{path: 'LoginPage',component: LogInPageComponent },
{ path: 'welcomepage', component: WelcomePageComponent, 
  canActivate : [AuthGuardServiceService] },
  { path: 'welcomepage/Math', component: MathComponent, 
  canActivate : [AuthGuardServiceService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 