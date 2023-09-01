import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {'class': 'flex flex-grow'}
})
export class LoginComponent {
  uala: string = '../../../../assets/svg/uala.svg'
  login: string = '../../../../assets/svg/login.svg'
  google: string = '../../../../assets/svg/google.svg'
  security: string = '../../../../assets/svg/security.svg'

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  password: boolean = false;

  loginForm = this.formBuilder.nonNullable.group({
    nombreUsuario: ['Marcos192000', [Validators.required]],
    password: ['123456', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  

  onLogin() {
    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next: (res) => {
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  togglePassword() {
    this.password = !this.password;
  }

}
