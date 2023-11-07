import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';
import { map } from 'rxjs';
import { ArticleResponseInterface } from 'src/app/shared/models/articleResponse.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postRegistrationUser(data: any) {
    return this.http.post<any>('http://localhost:3000/user', data);
  }

  postLoginUser(data: any) {
    return this.http.post<any>('http://localhost:3000/loginUser', data);
  }

  getRegistrationUser() {
    return this.http.get<any>('http://localhost:3000/user');
  }

  postProducts(data: ProductInterface) {
    return this.http.post<any>('http://localhost:3000/products', data);
  }

  getProducts() {
    return this.http.get<ProductInterface>('http://localhost:3000/products');
  }
}
