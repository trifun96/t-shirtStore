import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';

import { productAction } from 'src/app/feature/admin/store/actions';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponent {
  @ViewChild('sideNav') sideNav: ElementRef;
  @Input() public products: ProductInterface[];
  public filterProducts: ProductInterface[];
  public originalProducts: ProductInterface[];
  public selectedCategories: string[] = [];
  public selectedSize: string[] = [];
  public selectedPrice: number | null = null;
  public selectedProduct: ProductInterface = null;
  public search: string;
  page: number = 1;
  public showSideNav: boolean = false;
  public showProductDetail: boolean = false;
  constructor(private store: Store, private spinner: NgxSpinnerService, private favoriteService:FavoriteService, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.store.dispatch(productAction.getProducts());
    this.store
      .select((state: any) => state.productReducer.currentArticle)
      .subscribe((currentArticle) => {
        if (currentArticle) {
          this.spinner.hide();
          this.originalProducts = this.products;
          this.filterProducts = this.products;
        } else {
          this.spinner.show();
        }
      });
  }

  onSearch(newValue: string) {
    this.search = newValue;
    this.products = this.filterProducts.filter((element) =>
      element.title.toLowerCase().includes(newValue.toLowerCase())
    );
  }

  openFilter() {
    this.showSideNav = !this.showSideNav;
  }

  onChangeFilterPrice(event: any) {
    this.products = this.filterProducts.filter((value) => value.price >= event);
    this.selectedPrice = event;
    this.applyFilters();
  }

  applyFilterByCategory(eventData: { checked: boolean; subCategory: string }) {
    const checked = eventData.checked;
    const subCategory = eventData.subCategory;

    if (checked) {
      this.selectedCategories.push(subCategory);
    } else {
      const index = this.selectedCategories.indexOf(subCategory);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }

    this.applyFilters();
  }

  applyFilterBySize(eventData: { checked: boolean; size: string }) {
    const checked = eventData.checked;
    const size = eventData.size;

    if (checked) {
      this.selectedSize.push(size);
    } else {
      const index = this.selectedSize.indexOf(size);
      if (index !== -1) {
        this.selectedSize.splice(index, 1);
      }
    }

    this.applyFilters();
  }

  applyFilters() {
    const selectedCategories = this.selectedCategories;
    const selectedSize = this.selectedSize;
    const priceFilter = this.selectedPrice;

    if (
      selectedCategories.length === 0 &&
      selectedSize.length === 0 &&
      !priceFilter
    ) {
      this.products = this.originalProducts;
    } else {
      this.products = this.filterProducts.filter(
        (element) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(element.subCategory)) &&
          (selectedSize.length === 0 || selectedSize.includes(element.size)) &&
          (!priceFilter || element.price >= priceFilter)
      );
    }
  }

  clearAllFilters() {
    this.selectedCategories = [];
    this.selectedSize = [];
    this.selectedPrice = null;
    this.products = this.originalProducts;
  }

  onCloseSideBar() {
    this.showSideNav = false;
  }

  openProductDetailModal(product: ProductInterface) {
    this.showProductDetail = true;
    this.selectedProduct = product;
  }

  closeSharedModal() {
    this.showProductDetail = false;
  }

  handleClickOutside() {
    if (this.showSideNav) {
      const clickedInside = this.sideNav.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.showProductDetail = false;
        this.showSideNav = false;
      }
    }
  }

  addToFavorite(favoriteData:ProductInterface) {
    this.favoriteService.addFavoriteItem(favoriteData);
    this.toastr.success('You are successfully added product to favorite list')
  }
}
