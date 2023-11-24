import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
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
import { DropdownComponent} from './components/dropdown-component/dropdown-component.component';
import { DeliveryInformationComponent } from './components/delivery-information/delivery-information.component';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { ExpandPanelComponent } from './components/expand-panel/expand-panel.component';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  declarations: [HeaderComponent, DeliveryInformationComponent, SharedModalComponent, SharedModalComponent, FooterComponent, SearchMessageComponent, SideNavComponent, ProductDetailComponent, EmptyCardComponent, ProductModalComponent, DropdownComponent, SideCartComponent, ExpandPanelComponent, PluralizePipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
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
   exports:[RouterModule, ReactiveFormsModule, DeliveryInformationComponent, ExpandPanelComponent, MatListModule, ToastrModule, MatMenuModule, MatSidenavModule, MatFormFieldModule, MatToolbarModule, MatCardModule, NgIf, MatPaginatorModule, MatSidenavModule, NgxPaginationModule, NgxSpinnerModule, FormsModule, PluralizePipe, HttpClientModule, MatIconModule,SharedModalComponent,MatButtonModule,CommonModule, HeaderComponent, FooterComponent, SearchMessageComponent, SideNavComponent, ProductDetailComponent, EmptyCardComponent, ProductModalComponent, DropdownComponent]
})
export class SharedModule { }
