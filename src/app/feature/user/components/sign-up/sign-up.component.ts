import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import { selectValidationErrors } from '../../store/reducer';
import { AuthService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private store:Store, private formBuilder: FormBuilder, private auth:AuthService) {

  }
  formGroup = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required]],
  });
  
  onSubmit() {
    this.formGroup.getRawValue();

    const request = this.formGroup.getRawValue();
    this.formGroup.reset();

    this.store.dispatch(authActions.register({request}))
  }
}
