import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItemList = res;
    });
  }

  orderForm = new FormGroup({
    fullName: new FormControl(this.orderModelObject.fullName),
    email: new FormControl(this.orderModelObject.email),
    address: new FormControl(this.orderModelObject.address),
    mobilePhone: new FormControl(this.orderModelObject.mobilePhone),
    city: new FormControl(this.orderModelObject.city),
    state: new FormControl(this.orderModelObject.state),
    zip: new FormControl(this.orderModelObject.zip),
    products: new FormControl(this.orderModelObject.products),
  });

  onSubmit() {
    this.orderModelObject.fullName = this.orderForm.value.fullName;
    this.orderModelObject.email = this.orderForm.value.email;
    this.orderModelObject.address = this.orderForm.value.address;
    this.orderModelObject.mobilePhone = this.orderForm.value.mobilePhone;
    this.orderModelObject.city = this.orderForm.value.city;
    this.orderModelObject.state = this.orderForm.value.state;
    this.orderModelObject.zip = this.orderForm.value.zip;
    this.orderModelObject.products = this.cartItemList;
    const request:OrderInterface = this.orderModelObject;
    this.api.postOrders(request).subscribe(() => {
      this.toast.success('You have successfully ordered your product.');
      this.router.navigate(['product-page']);
      this.orderForm.reset();
    })
    
  }
}
