import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { OrderComponent } from './components/order-component/order-component.component';


const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    children:[
      {
        path:'products', component:AdminPageComponent,
      },
      {
        path:'orders', component:OrderComponent
      },
      {
        path:'', redirectTo:'/admin-products', pathMatch:'full'
      },
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
