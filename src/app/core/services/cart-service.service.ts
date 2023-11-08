import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Injectable({
  providedIn: 'root',
})export class CartService {
  public cartItemList: ProductInterface[] = [];
  public cartList$ = new BehaviorSubject<ProductInterface[]>([]);
  public totalItem$ = new BehaviorSubject<number>(0);

  constructor() {
    this.cartList$.asObservable();
  }

  getProducts() {
    return this.cartList$.asObservable();
  }

  addToCart(product: ProductInterface) {
    this.cartItemList.push(product);
    this.cartList$.next(this.cartItemList);
    this.totalItem$.next(this.cartItemList.length);
  }

  removeFromCart(product: ProductInterface) {
    const index = this.cartItemList.indexOf(product);
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
    }
    this.cartList$.next(this.cartItemList);
    this.totalItem$.next(this.cartItemList.length);

  }

  decreaseQuantity(cartItem: ProductInterface) {
    const index = this.cartItemList.indexOf(cartItem);
    if (index !== -1 && this.cartItemList[index].quantity > 1) {
      this.cartItemList[index].quantity--;
      this.cartList$.next(this.cartItemList);
    }
  }

  increaseQuantity(cartItem: ProductInterface) {
  const index = this.cartItemList.indexOf(cartItem);
  if (index !== -1) {
    const updatedProduct = { ...this.cartItemList[index] }; 
    updatedProduct.quantity++; 
    this.cartItemList[index] = updatedProduct; 
    this.cartList$.next(this.cartItemList);
  }
}

calculateTotalPrice(): number {
  let totalPrice = 0;
  for (const product of this.cartItemList) {
    totalPrice += product.price * product.quantity;
  }
  return totalPrice;
  
}
}