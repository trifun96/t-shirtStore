import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit{
  constructor(private apiService:ApiService) {}
  newCollectionItems:ProductInterface[];
  filteredProducts:ProductInterface[]

  ngOnInit(): void {
    this.filterProducts()
  }

  filterProducts() {
this.apiService.getProducts().subscribe((res) => {
  this.filteredProducts = res;
  this.newCollectionItems = this.filteredProducts.filter((element) => element.subCategory === 'Novo')
})
  }
}
