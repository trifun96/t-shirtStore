import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api-service.service';
import { authActions } from './actions';
import { Router } from '@angular/router';
import { CurrentUserInterface } from 'src/app/shared/models/currentUserInterface.interface';
import { AuthService } from 'src/app/core/services/auth-service.service';

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private apiService: ApiService, private router: Router, private auth:AuthService) {}

  registerEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(authActions.register),
    mergeMap(({ request }) => {
      if (!request.email) {
        return of(authActions.registerFailure({ errors: { email: 'Email is required', password:'Password is required' } }));
      }
      return this.apiService.postRegistrationUser(request).pipe(
        map((currentUser: CurrentUserInterface) =>
          authActions.registerSuccess({ currentUser })
        
        ),
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

loginEffects$ = createEffect(() =>
this.actions$.pipe(
  ofType(authActions.login),
  mergeMap(({ request }) => {
    if (!request.email && !request.password) {
      return of(authActions.loginFailure({ errors: { email: 'Email is required', password:'Password is required' } }));
    }
    return this.apiService.postLoginUser(request).pipe(
      map((currentUser: CurrentUserInterface) =>
        authActions.loginSuccess({ currentUser })
      
      ),
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