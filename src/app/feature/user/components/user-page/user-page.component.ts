import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, take } from 'rxjs';
import { productAction } from 'src/app/feature/admin/store/actions';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  products$: Observable<ProductInterface>;
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(productAction.getProducts());
    this.store.subscribe(
      (state: any) => (this.products$ = state.productReducer.currentArticle)
    );
  }
}
