import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  private authService = inject(Auth)
  private router = inject(Router)

  isPasswordVisible = signal<boolean>(false)

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

  this.authService.login(this.form.getRawValue()).subscribe(() => this.router.navigate(['']));
  }
}
