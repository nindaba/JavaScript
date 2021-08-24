import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { AuthGuardService } from './services/auth-guard.service';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {path:'user',loadChildren:()=> import('./user/user.module').then(mdl=> mdl.UserModule)},
  {path:'',redirectTo:'/dashboard',pathMatch:"full"},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
  {path:'**',component:QuestionComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
