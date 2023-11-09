import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from '../../models/productInterface.interdace';
import { CartService } from 'src/app/core/services/cart-service.service';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private cart: CartService, private favoriteService:FavoriteService, private toastr:ToastrService) {}
  @Input() data: ProductInterface;
  @Output() closeProductModal = new EventEmitter<any>();

  ngOnInit(): void {
    const sizes = document.querySelectorAll('.circle-icon');

    sizes.forEach((size) => {
      size.addEventListener('click', function () {
        size.classList.toggle('clicked');
      });
    });

    const heart = document.getElementById('heart');

    let isClicked = false;

    heart.addEventListener('click', function () {
      if (!isClicked) {
        heart.textContent = 'favorite';
        heart.classList.add('clicked');
        isClicked = true;
      } else {
        heart.classList.remove('clicked');
        heart.textContent = 'favorite_border';
        isClicked = false;
      }
    });
  }

  addToCartItem(data: ProductInterface) {
    this.cart.addToCart(data);
    this.closeProductModal.emit()
    this.toastr.success('You are successfully added product to cart.');
  }

  addToFavorite(favoriteData:ProductInterface) {
    this.favoriteService.addFavoriteItem(favoriteData);
    this.toastr.success('You are successfully added product to favorite.');
  }
}
