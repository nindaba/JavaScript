import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'orders',component:OrdersComponent},
  {path:'category',component:CategoryItemComponent},
  {path:'category/:categoryId',component:CategoryItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
