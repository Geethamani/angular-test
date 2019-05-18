import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {InventoryComponent} from './inventory/inventory.component';
import {BlogComponent} from './blog/blog.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"inventory",
    component:InventoryComponent 
  },
  {
    path:"blog/:id/:name",
    component:BlogComponent
  },
  {
    path:"customer",
      loadChildren:'./customers/customers.module#CustomersModule'
  },
  {
    path:"admin",
    canActivate:[AuthGuard],
    component:InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
