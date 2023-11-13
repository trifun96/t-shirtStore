import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { OrderInterface } from 'src/app/shared/models/order.interface';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponent implements OnInit{
  constructor(private api:ApiService) {}
  orders:OrderInterface;

  ngOnInit(): void {
    this.api.getOrders().subscribe((res) => {
      this.orders = res
      console.log(this.orders, 'res')
    })
  }
}
