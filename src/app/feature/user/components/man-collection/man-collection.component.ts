import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-man-collection',
  templateUrl: './man-collection.component.html',
  styleUrls: ['./man-collection.component.css']
})
export class ManCollectionComponent implements OnInit{
  constructor(private api:ApiService){}
  manCollectionItem:ProductInterface[];
  filteredProducts:ProductInterface[];

ngOnInit(): void {
 this.filterProducts()
}

private filterProducts() {
  this.api.getProducts().subscribe((res) => {
    this.manCollectionItem = res;
    this.filteredProducts = res
    this.manCollectionItem = this.filteredProducts.filter((element) => element.category === 'Muskarci')
  })
}
}
