import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/shared/auth.service';
import { Router } from '@angular/router';
import { lista_utenti } from 'src/app/DB/utenti';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login.component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //===== Local Variables =======
  login = {
    email: '',
    password: '',
  };
  //======= Constructor ========
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  //====== Hooks =========
  ngOnInit(): void {}

  //======= Form controls ========
  loginForm = this.formBuilder.group({
    email: new FormControl([
      this.login.email,
      {
        validators: [Validators.required, Validators.email],
      },
    ]),
    password: new FormControl([
      this.login.password,
      {
        validators: [Validators.required],
      },
    ]),
  });
  //====== Locla functions ======
  onSubmit() {
    let user = lista_utenti.find((u) => u.email === this.login.email);
    this.loginForm.reset();
    if (user?.password === this.login.password) {
      this.router.navigate(['dashboard']);
    } else {
      console.log('Credenziali non valide');
    }
  }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
}
