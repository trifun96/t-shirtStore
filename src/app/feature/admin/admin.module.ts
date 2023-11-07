import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminPageComponent, AddProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
