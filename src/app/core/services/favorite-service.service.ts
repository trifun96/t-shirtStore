import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public favoriteItemList: any = [];
  public favoriteList$ = new BehaviorSubject<ProductInterface[]>([]);
  public totalFavoriteItem$ = new BehaviorSubject<number>(0);
  constructor() {
    this.loadFavoriteItemsFromLocalStorage()
  }

  addFavoriteItem(favoriteItem: ProductInterface) {
    this.favoriteItemList.push(favoriteItem);
    this.favoriteList$.next(this.favoriteItemList);
    this.totalFavoriteItem$.next(this.favoriteItemList.length);
    this.saveFavoriteItemsToLocalStorage()
  }

  removeFavoriteItem(favoriteItem:ProductInterface) {
    const index = this.favoriteItemList.indexOf(favoriteItem);
    if (index !== -1) {
      this.favoriteItemList.splice(index, 1);
    }
    this.favoriteList$.next(this.favoriteItemList);
    this.totalFavoriteItem$.next(this.favoriteItemList.length);
    this.saveFavoriteItemsToLocalStorage()
  }

  private loadFavoriteItemsFromLocalStorage() {
    const storedFavoriteItems = localStorage.getItem('favoriteItems');
    if (storedFavoriteItems) {
      this.favoriteItemList = JSON.parse(storedFavoriteItems);
      this.favoriteList$.next(this.favoriteItemList);
      this.totalFavoriteItem$.next(this.favoriteItemList.length);
    }
  }

  private saveFavoriteItemsToLocalStorage() {
    localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteItemList));
  }
}
