import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart-service.service';
import { ProductInterface } from '../../models/productInterface.interdace';

@Component({
  selector: 'app-expand-panel',
  templateUrl: './expand-panel.component.html',
  styleUrls: ['./expand-panel.component.css']
})
export class ExpandPanelComponent implements OnInit{
  public numberOfProductInCart$: Observable<number>;
  public cartItemList: ProductInterface[] = [];
  public totalPrice:number = 0;
  constructor(private cartService:CartService){}


  ngOnInit(): void {
    this.numberOfProductInCart$ = this.cartService.totalItem$;
    this.totalPrice = this.cartService.calculateTotalPrice();
    this.getProducts();
  }

  private getProducts() {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItemList = res;
    })
  }

  public togglePanel() {
    let panel = document.getElementById("myExpandPanel") as HTMLElement;
    let arrow = document.querySelector(".arrow") as HTMLElement;
  
    if (panel) {
      panel.classList.toggle("expanded");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        arrow.style.transform = "rotate(45deg)";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        arrow.style.transform = "rotate(-135deg)";
      }
    }
  }
}