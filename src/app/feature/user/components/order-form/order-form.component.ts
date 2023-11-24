import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api-service.service';
import { CartService } from 'src/app/core/services/cart-service.service';
import { OrderInterface } from 'src/app/shared/models/order.interface';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private toast: ToastrService,
    private router: Router,
    private api:ApiService,
  ) {}
  public cartItemList: ProductInterface[] = [];
  public cartItem: ProductInterface;
  private orderModelObject: OrderInterface = new OrderInterface();
  public totalPrice:number

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItemList = res;
      this.totalPrice = this.cartService.calculateTotalPrice();
    });
  }

  orderForm = new FormGroup({
    name: new FormControl(this.orderModelObject.name),
    surname: new FormControl(this.orderModelObject.surname),
    email: new FormControl(this.orderModelObject.email),
    address: new FormControl(this.orderModelObject.address),
    mobilePhone: new FormControl(this.orderModelObject.mobilePhone),
    city: new FormControl(this.orderModelObject.city),
    country: new FormControl(this.orderModelObject.country),
    zip: new FormControl(this.orderModelObject.zip),
    comment: new FormControl(this.orderModelObject.comment),
    products: new FormControl(this.orderModelObject.products),
  });

  onSubmit() {
    this.orderModelObject.name = this.orderForm.value.name;
    this.orderModelObject.surname = this.orderForm.value.surname;
    this.orderModelObject.email = this.orderForm.value.email;
    this.orderModelObject.address = this.orderForm.value.address;
    this.orderModelObject.mobilePhone = this.orderForm.value.mobilePhone;
    this.orderModelObject.city = this.orderForm.value.city;
    this.orderModelObject.country = this.orderForm.value.country;
    this.orderModelObject.zip = this.orderForm.value.zip;
    this.orderModelObject.comment = this.orderForm.value.comment;
    this.orderModelObject.products = this.cartItemList;
    console.log(this.orderModelObject)
    const request:OrderInterface = this.orderModelObject;
    this.api.postOrders(request).subscribe(() => {
      this.toast.success('You have successfully ordered your product.');
      this.router.navigate(['product-page']);
      this.orderForm.reset();
    })
    
  }
}
