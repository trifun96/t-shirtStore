import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { Observable, combineLatest } from 'rxjs';
import { selectCurrentUser, selectValidationErrors } from '../../store/reducer';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { ErrorInterface } from 'src/app/shared/models/errorInterface.interface';
import { IState, State } from 'src/app/shared/models/store.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit{
  constructor(
    private store: Store<IState>,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {}
  formGroup = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required]],
  });

  public data$:Observable<ErrorInterface> = this.store.select((state:IState) => state.authReducer.validationErrors);

  ngOnInit(): void {
    this.data$.subscribe((res) => {
      console.log(res)
    })
  }

  onSubmit() {
    this.formGroup.getRawValue();

    const request = this.formGroup.getRawValue();
    this.formGroup.reset();

    this.store.dispatch(authActions.register({ request }));
  }
}
