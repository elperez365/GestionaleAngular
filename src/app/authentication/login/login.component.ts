import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private router: Router) {}

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
    this.router.navigateByUrl('dashboard')
  }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
}
