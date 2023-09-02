import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  uala: string = '../../../../assets/svg/uala.svg'
  login: string = '../../../../assets/svg/login.svg'
  google: string = '../../../../assets/svg/google.svg'
  security: string = '../../../../assets/svg/security.svg'

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  password: boolean = false;
  isUserLogged: boolean | undefined;

  loginForm = this.formBuilder.nonNullable.group({
    nombreUsuario: ['Marcos192000', [Validators.required]],
    password: ['123456', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getIsUserLogged().subscribe({
      next: (res) => {
        this.isUserLogged = res;
        if (this.isUserLogged) {
          this.router.navigate(['home']);
        }
      }
    });
  }

  onLogin() {
    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => this.auth.setIsUserLogged()
    });
  }

  togglePassword() {
    this.password = !this.password;
  }

}
