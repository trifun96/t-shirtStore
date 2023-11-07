import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { productAction } from '../../store/actions';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent {
  @Output() submitEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private store: Store) {}
  productsModelObj: ProductInterface = new ProductInterface();
  previewImage: string = '';

  url = '/assets/images/close.png';

  hasPreviewImage: boolean = false;

  productForm = this.fb.nonNullable.group({
    image: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required],
    quantity: [null, Validators.required],
    price: [null, Validators.required],
    category: ['', Validators.required],
    size:['', Validators.required]
  });

  onSelectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        const base64Image = event.target.result;
        this.hasPreviewImage = true;
        this.previewImage = base64Image;
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  postProductsData() {
    const request = this.productForm.getRawValue();
    request.image = this.previewImage;
    this.productForm.reset();
    this.store.dispatch(productAction.postProducts({ request }));
    this.submitEvent.emit();
  }
}
