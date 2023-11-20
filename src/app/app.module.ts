import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './feature/user/store/effects';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsEffect } from './feature/admin/store/effects';
import { state } from './shared/store/store';
import { AuthService } from './core/services/auth-service.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot(state),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    EffectsModule.forRoot([AuthEffect, ProductsEffect]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
