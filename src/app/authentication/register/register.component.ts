import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/shared/auth.service';
import { Router } from '@angular/router';
import { lista_utenti } from 'src/app/DB/utenti';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/app/interfaces/user';
import { Hash } from 'angular-feather/icons';
import * as bcrypt from 'bcryptjs'
@Component({
  selector: 'app-register.component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  //===== Local Variables =======
  register = {
    nome: '',
    numero: '',
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
  registerForm = this.formBuilder.group({
    nome: new FormControl([
      this.register.nome,
      {
        validators: [Validators.required],
      },
    ]),
    numero: new FormControl([
      this.register.numero,
      {
        validators: [Validators.required],
      },
    ]),
    email: new FormControl([
      this.register.email,
      {
        validators: [Validators.required, Validators.email],
      },
    ]),
    password: new FormControl([
      this.register.password,
      {
        validators: [
          Validators.required,
          Validators.pattern(
            '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
          ),
        ],
      },
    ]),
  });
  //====== Local functions ======
  onSubmit() {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(this.register.password, 10);
    let newUser: User = {
      id: uuidv4(),
      ... this.register,
      password: pass
    }
    lista_utenti.push(newUser)
    localStorage.setItem('access_token', pass)
    this.router.navigate(['login'])
  }

  //============== Form Getters =============
  get nome() {
    return this.registerForm.controls['nome'];
  }
  get numero() {
    return this.registerForm.controls['numero'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
}
