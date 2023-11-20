import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/core/services/api-service.service';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { productAction } from './actions';
import { catchError, map, mergeMap } from 'rxjs';
import { of } from 'rxjs';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Injectable()
export class ProductsEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  productsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productAction.postProducts),
      mergeMap(({ request }) => {
        if (
          !(
            request.title &&
            request.quantity &&
            request.price &&
            request.image &&
            request.description &&
            request.category
          )
        ) {
          return of(productAction.postProductsFailure());
        }
        return this.apiService
          .postProducts(request)
          .pipe(
            map((currentArticle: ProductInterface) =>
              productAction.postProductsSuccess({ currentArticle })
            )
          );
      })
    )
  );

  getProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productAction.getProducts),
      mergeMap(() =>
        this.apiService.getProducts().pipe(
          map((currentArticle: ProductInterface) =>
            productAction.getProductsSuccess({ currentArticle })
          ),
          catchError((error) => of(productAction.getProductsFailure()))
        )
      )
    )
  );
}
