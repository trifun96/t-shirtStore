import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductInterface } from '../../models/productInterface.interdace';
import { CartService } from 'src/app/core/services/cart-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent implements OnInit{
@Output() closeEvent = new EventEmitter<boolean>();
public cartItem:ProductInterface[] = [];
public totalPrice:number = 0;
public numberOfProductInCart$: Observable<number>;
constructor(private cartService:CartService) {}

ngOnInit(): void {
this.numberOfProductInCart$ = this.cartService.totalItem$
this.totalPrice = this.cartService.calculateTotalPrice();
  this.getCartItems();
}

getCartItems() {
this.cartService.getProducts().subscribe((response) => {
  this.cartItem = response;
  console.log(this.cartItem, 'test')
})
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

closeSideCartMenu(){
  this.closeEvent.emit()
}
}
