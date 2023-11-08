import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { MatStepperModule } from '@angular/material/stepper';
import { ProductComponent } from './components/product-component/product-component.component';
import { CartComponent } from './components/cart-component/cart-component.component';
import { FavoriteComponent } from './components/favorite-component/favorite-component.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

@NgModule({
  declarations: [
    UserPageComponent,
    SignUpComponent,
    LoginComponent,
    ProductComponent,
    CartComponent,
    FavoriteComponent,
    OrderFormComponent,
  ],

    imports: [ CommonModule, UserRoutingModule, StoreModule, SharedModule, MatStepperModule]
})
export class UserModule { }
