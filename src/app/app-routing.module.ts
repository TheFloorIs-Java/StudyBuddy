import { TipsComponent } from './tips/tips.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';


const routes: Routes = [
  {path: 'navBar',component:NavBarComponent},
  {path: '',component: LogInPageComponent },
 {path: 'signIn',component: SignInPageComponent},
 {path : 'home', component: TipsComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 