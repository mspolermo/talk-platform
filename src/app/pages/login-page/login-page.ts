import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  private authService = inject(Auth)

form = new FormGroup({
  username: new FormControl<string>('', {
    nonNullable: true,
    validators: Validators.required
  }),
  password: new FormControl<string>('', {
    nonNullable: true,
    validators: Validators.required
  })
});

  onSubmit() {
  if (this.form.invalid) return;

  console.log(this.form.getRawValue());
  this.authService.login(this.form.getRawValue());
  }
}
