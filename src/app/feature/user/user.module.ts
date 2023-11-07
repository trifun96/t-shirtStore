import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './components/product-component/product-component.component';

@NgModule({
  declarations: [
    UserPageComponent,
    SignUpComponent,
    LoginComponent,
    ProductComponent
  ],

    imports: [ CommonModule, UserRoutingModule, StoreModule, SharedModule]
})
export class UserModule { }
