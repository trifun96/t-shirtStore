import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api-service.service';
import { authActions } from './actions';
import { Router } from '@angular/router';
import { CurrentUserInterface } from 'src/app/shared/models/currentUserInterface.interface';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router,
  ) {}

  registerEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.registerTest),
      mergeMap(({ request }) => {
        if (!(request.email && request.password)) {
          return of(
            authActions.registerFailure({
              errors: {
                email: 'Email is required',
                password: 'Password is required',
              },
            })
          );
        }
        return this.apiService
          .postRegistrationUser(request)
          .pipe(
            map((currentUser: CurrentUserInterface) =>
              authActions.registerSuccess({ currentUser })
            )
          );
      })
    )
  );

  redirectAfterRegisterEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.registerSuccess),
        map(() => {
          this.router.navigateByUrl('product-page');
        })
      ),
    { dispatch: false }
  );


  //login effect
  loginEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      mergeMap(({ request }) => {
        if (!request.email && !request.password) {
          return of(
            authActions.loginFailure({
              errors: {
                email: 'Email is required',
                password: 'Password is required',
              },
            })
          );
        }
        return this.apiService
          .postLoginUser(request)
          .pipe(
            map((currentUser: CurrentUserInterface) =>
              authActions.loginSuccess({ currentUser })
            )
          );
      })
    )
  );

  redirectAfterLoginEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.registerSuccess),
        map(() => {
          this.router.navigateByUrl('product-page');
        })
      ),
    { dispatch: false }
  );
}
