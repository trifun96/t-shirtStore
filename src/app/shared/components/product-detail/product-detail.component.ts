import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../../models/productInterface.interdace';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() data: ProductInterface;

  ngOnInit(): void {
    const sizes = document.querySelectorAll('.circle-icon');

    sizes.forEach((size) => {
      size.addEventListener('click', function () {
        size.classList.toggle('clicked');
      });
    });

    const heart = document.getElementById("heart");
    
    let isClicked = false;
    
    heart.addEventListener("click", function() {
      if (!isClicked) {
        heart.textContent = "favorite"; 
        heart.classList.add("clicked"); 
        isClicked = true;
      } else {
        heart.classList.remove("clicked"); 
        heart.textContent = "favorite_border"; 
        isClicked = false;
      }
    });
  }
}
