import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api-service.service';
import { OrderInterface } from 'src/app/shared/models/order.interface';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private api: ApiService, private toastr: ToastrService) {}
  products: OrderInterface;

  ngOnInit(): void {
this.getAllOrders()
  }

  getAllOrders() {
    this.api.getOrders().subscribe((res) => {
      this.products = res;
      console.log(this.products, 'res');
  })
}

  deleteOrder(productData:any) {
    this.api.deleteOrder(productData.id).subscribe(() => {
      this.toastr.success('You are successfully deleted order!');
      this.getAllOrders()
    });
  }
}
