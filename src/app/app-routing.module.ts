
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './subject-pages/art/art.component';
import { EnglishComponent } from './subject-pages/english/english.component';
import { HistoryComponent } from './subject-pages/history/history.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { MathComponent } from './subject-pages/math/math.component';
import { PhysicsComponent } from './subject-pages/physics/physics.component';
import { ScienceComponent } from './subject-pages/science/science.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [{path: '',component: HomePageComponent },
{path: 'signIn',component: SignInPageComponent } ,
{path: 'LoginPage',component: LogInPageComponent },
{path: 'welcomepage', component: WelcomePageComponent, canActivate : [AuthGuardServiceService] },
{path: 'Math', component: MathComponent , canActivate : [AuthGuardServiceService]},
{path: 'Science', component: ScienceComponent , canActivate : [AuthGuardServiceService]},
{path: 'History', component: HistoryComponent , canActivate : [AuthGuardServiceService]},
{path: 'English', component: EnglishComponent , canActivate : [AuthGuardServiceService]},
{path: 'Physics', component: PhysicsComponent , canActivate : [AuthGuardServiceService]},
{path: 'Art', component: ArtComponent , canActivate : [AuthGuardServiceService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 