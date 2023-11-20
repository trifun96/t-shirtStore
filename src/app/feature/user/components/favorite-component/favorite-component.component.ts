import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.css']
})
export class FavoriteComponent implements OnInit{
  favoriteItems$: Observable<any> = new Observable<ProductInterface>();
  isOpenProductDetailModal:boolean;
  selectedProduct:ProductInterface;
  constructor(private favoriteService:FavoriteService){}
  ngOnInit(): void {
   this.favoriteItems$ = this.favoriteService.favoriteList$
  }

  removeFavoriteItem(favoriteItem:ProductInterface) {
    this.favoriteService.removeFavoriteItem(favoriteItem)
  }

  openProductDetailModal(favoriteItems:ProductInterface){
    this.selectedProduct = favoriteItems;
    this.isOpenProductDetailModal = true;
  }

  closeModal(){
    this.isOpenProductDetailModal = false
  }
}
