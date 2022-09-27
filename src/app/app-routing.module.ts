import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HwcompletedListComponent } from './components/hwcompleted-list/hwcompleted-list.component';
import { HwcompletedComponent } from './components/hwcompleted/hwcompleted.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { HwCompletedServiceService } from './services/hw-completed-service.service';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [{path: '',component: LogInPageComponent },
{path: 'signIn',component: SignInPageComponent } ,
{path: "hwcompleted",component: HwcompletedListComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 