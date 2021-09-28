import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'category',pathMatch:'full'},
  {path:'category',component:CategoryItemComponent},
  {path:'category/:categoryId',component:CategoryItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
