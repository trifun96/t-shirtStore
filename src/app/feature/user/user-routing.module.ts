import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CartComponent } from './components/cart-component/cart-component.component';
import { FavoriteComponent } from './components/favorite-component/favorite-component.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { ManCollectionComponent } from './components/man-collection/man-collection.component';
import { WomanCollectionComponent } from './components/woman-collection/woman-collection.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'product-page', component: UserPageComponent},
  {path:'favorite-cart', component:FavoriteComponent},
  {path:'cart', component:CartComponent},
  {path:'order-form', component:OrderFormComponent},
  {path:'new-collection',component:NewCollectionComponent},
  {path:'man-collection', component:ManCollectionComponent},
  {path:'woman-collection', component:WomanCollectionComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
