import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-woman-collection',
  templateUrl: './woman-collection.component.html',
  styleUrls: ['./woman-collection.component.css']
})
export class WomanCollectionComponent implements OnInit{
  constructor(private api:ApiService){}
  public womenCollectionItem:ProductInterface[]
  public filteredProducts:ProductInterface[]
ngOnInit(): void {
this.filterProducts()
}

private filterProducts() {
  this.api.getProducts().subscribe((res) => {
    this.womenCollectionItem = res;
    this.filteredProducts = res
    this.womenCollectionItem = this.filteredProducts.filter((element) => element.category === 'Zene')
  })
}
}
