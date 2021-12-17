import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AuthGuard } from './auth.guard';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainViewComponent } from './order-view/main-view/main-view.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
=======
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
>>>>>>> 4c912d4b4a0ea5543ca0d17f8e5f03b6e1fa37ec

//TODO replace the first route with username and create interceptor to redirect to proper page
const routes: Routes = [
<<<<<<< HEAD
  // {path:'',redirectTo:'category',pathMatch:'full'},
  {path:'',redirectTo:'admin/category',pathMatch:'full'},
  // {path:'order-view',loadChildren: ()=> import('./order-view/order-view.module').then(module=> module.OrderViewModule)},
  // {path:'',redirectTo:'/orders',pathMatch:"full"},
  {path:'login',component:LoginRegisterComponent},
  {path:'orders',loadChildren: ()=> import('./order-view/order-view.module').then(module=> module.OrderViewModule),canActivate:[AuthGuard]},
  {path:'category',component:CategoryComponent},
  {path:'category/:categoryId',component:CategoryComponent},
  {path:'admin',loadChildren: ()=> import('./admin/admin.module').then(module=>module.AdminModule)},
  {path:'**',component:NotFoundComponent}
=======
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'orders',component:OrdersComponent},
  {path:'category',component:CategoryItemComponent},
  {path:'category/:categoryId',component:CategoryItemComponent}
>>>>>>> 4c912d4b4a0ea5543ca0d17f8e5f03b6e1fa37ec
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { } 
