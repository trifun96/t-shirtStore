import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  constructor(private api: ApiService) {}
  products: any;

  ngOnInit(): void {}

  isOpenModal: boolean;

  openProductForm() {
    this.isOpenModal = true;
  }

  closeProductFormModal() {
    this.isOpenModal = false;
  }

  onSubmit() {
    this.isOpenModal = false;
  }
}
