import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;  
  isOpenModal: boolean;
  public isEdit = false;
  public editData:ProductInterface;
  constructor(private api: ApiService, private toastr:ToastrService) {}

   displayedColumns: string[] = [
    'image',
    'title',
    'description',
    'quantity',
    'price',
    'action'
   ]

   dataSource: MatTableDataSource<any>;

  ngOnInit(): void {
    this.getProducts()
    console.log(this.dataSource,'ds')
  }

  getProducts() {
    this.api.getProducts().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      console.log(this.paginator);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteProduct(id:number) {
    this.api.deleteProducts(id).subscribe((res) => {
      this.toastr.success('You are successfully deleted product from group');
      this.getProducts()
    })
  }

  openEditModal(isEdit:boolean, product:ProductInterface) {
    this.editData = product;
    this.isEdit = isEdit
    this.isOpenModal = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  openProductForm(isEdit:boolean) {
    this.isEdit = isEdit
    this.isOpenModal = true;
  }

  closeProductFormModal() {
    this.isOpenModal = false;
    this.getProducts()
  }
}
