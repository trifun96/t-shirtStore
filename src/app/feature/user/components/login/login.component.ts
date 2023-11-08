import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { LoginRequestInterface } from 'src/app/shared/models/loginRequestInterface.interface';
import { authActions } from '../../store/actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public registrationUser: LoginRequestInterface;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin-products']);
    }
  }

  loginForm = this.fb.nonNullable.group({
    password: ['', Validators.required],
    email: ['', [Validators.required]],
  });

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe((response) => {});
    const request = this.loginForm.getRawValue();
    this.store.dispatch(authActions.login({ request }));
    this.toastr.success('You are successful login!');
    this.loginForm.reset();
  }
}
