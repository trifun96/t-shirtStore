import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { productAction } from '../../store/actions';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<boolean>();
  @Input() editData: ProductInterface;
  @Input() isEdit: boolean;
  public productsData: ProductInterface[] = [];

  constructor(
    private store: Store,
    private api: ApiService,
    private toastr: ToastrService
  ) {}
  productsModelObj: ProductInterface = new ProductInterface();
  previewImage: string = '';

  url = '/assets/images/close.png';

  hasPreviewImage: boolean = false;

  ngOnInit(): void {
    console.log(this.isEdit, ' isEdit');
    if (this.isEdit) {
      this.productForm.controls['title'].setValue(this.editData.title);
      this.productForm.controls['description'].setValue(
        this.editData.description
      );
      this.productForm.controls['quantity'].setValue(this.editData.quantity);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['size'].setValue(this.editData.size);
      this.productForm.controls['subCategory'].setValue(
        this.editData.subCategory
      );
      this.hasPreviewImage = true;
      this.previewImage = this.editData.image;
      this.productsModelObj.image = this.editData.image;
    }
  }
  productForm = new FormGroup({
    image: new FormControl(this.productsModelObj.image, Validators.required),
    title: new FormControl(this.productsModelObj.title),
    description: new FormControl(this.productsModelObj.description),
    quantity: new FormControl(this.productsModelObj.quantity),
    price: new FormControl(this.productsModelObj.price),
    category: new FormControl(this.productsModelObj.title),
    subCategory: new FormControl(this.productsModelObj.subCategory),
    size: new FormControl(this.productsModelObj.title),
  });

  onSelectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();
      const image = reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.hasPreviewImage = true;
        this.previewImage = event.target.result;
        this.productsModelObj.image = event.target.result;
      };
    }
  }

  postProductsData() {
    this.productsModelObj.title = this.productForm.value.title;
    this.productsModelObj.description = this.productForm.value.description;
    this.productsModelObj.quantity = this.productForm.value.quantity;
    this.productsModelObj.price = this.productForm.value.price;
    this.productsModelObj.category = this.productForm.value.category;
    this.productsModelObj.subCategory = this.productForm.value.subCategory;
    this.productsModelObj.size = this.productForm.value.size;

    const request = this.productsModelObj;

    if (this.isEdit) {
      this.api.updateProducts(request, this.editData.id).subscribe((res) => {
        this.toastr.success('Your product is successfully updated!');
      });
      this.getProducts();
      this.submitEvent.emit();
      return;
    } else {
      this.store.dispatch(productAction.postProducts({ request }));
      this.getProducts();
      this.toastr.success('Your product is successfully added to group!');
      this.productForm.reset();
      this.submitEvent.emit();
    }
  }

  private getProducts() {
    this.api.getProducts().subscribe((res) => {
      this.productsData = res;
    });
  }
}
