import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteListComponent } from './components/complete-list/complete-list.component';
import { CompleteComponent } from './components/complete/complete.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [{path: '',component: LogInPageComponent },
{path: 'signIn',component: SignInPageComponent },
{path: 'complete',component: CompleteListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 