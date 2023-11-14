import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { SharedModalComponent } from './components/shared-modal/shared-modal.component';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './components/footer-component/footer-component.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SearchMessageComponent } from './components/search-message/search-message.component';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { EmptyCardComponent } from './components/empty-card/empty-card.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, SharedModalComponent, SharedModalComponent, FooterComponent, SearchMessageComponent, SideNavComponent, ProductDetailComponent, EmptyCardComponent, ProductModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    TranslateModule,
    NgxPaginationModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    NgIf,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
   exports:[RouterModule, ReactiveFormsModule, MatListModule,ToastrModule, MatSidenavModule, MatFormFieldModule, MatToolbarModule, MatCardModule, NgIf, MatPaginatorModule, MatSidenavModule, NgxPaginationModule, NgxSpinnerModule, FormsModule, HttpClientModule, MatIconModule,SharedModalComponent,MatButtonModule,CommonModule, HeaderComponent, FooterComponent, SearchMessageComponent, SideNavComponent, ProductDetailComponent, EmptyCardComponent, ProductModalComponent]
})
export class SharedModule { }
