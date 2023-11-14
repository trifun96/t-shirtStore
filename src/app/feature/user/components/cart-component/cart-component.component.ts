import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponent {
  cartItems$: Observable<ProductInterface[]>; // Change the type to an array
  totalPrice:number = 0

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartItems$ = this.cartService.cartList$;
    this.totalPrice = this.cartService.calculateTotalPrice();
    console.log(this.cartItems$, 'items');
  }

  removeProduct(cartItem: ProductInterface) {
    this.cartService.removeFromCart(cartItem);
    this.calculateTotalPrice();
    this.cartService.saveCartItemsToLocalStorage()
  }

  decreaseQuantity(cartItem: ProductInterface) {
    this.cartService.decreaseQuantity(cartItem);
    this.calculateTotalPrice();
  }
  
  increaseQuantity(cartItem: ProductInterface) {
    this.cartService.increaseQuantity(cartItem);
    this.calculateTotalPrice();
  }

  private calculateTotalPrice() {
    this.totalPrice = this.cartService.calculateTotalPrice();
  }
}