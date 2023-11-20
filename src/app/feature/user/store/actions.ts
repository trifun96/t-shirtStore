import { createActionGroup, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/models/currentUserInterface.interface';
import { ErrorInterface } from 'src/app/shared/models/errorInterface.interface';
import { LoginRequestInterface } from 'src/app/shared/models/loginRequestInterface.interface';
import { UserRegistration } from 'src/app/shared/models/userRegistration.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Register test': props<{ request: UserRegistration }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: ErrorInterface }>(),

    'Login': props<{ request: LoginRequestInterface }>(),
    'Login success': props<{ currentUser: CurrentUserInterface }>(),
    'Login failure': props<{ errors: ErrorInterface }>(),
  },
});
