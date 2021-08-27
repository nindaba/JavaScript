import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PetformComponent } from './components/petform/petform.component';
import { TrainerFormComponent } from './components/trainer-form/trainer-form.component';

const routes: Routes = [
  {path:'add-pet',component:PetformComponent},
  {path:'add-trainer',component:TrainerFormComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
