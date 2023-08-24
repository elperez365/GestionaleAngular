import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register.component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent{
  //===== Local Variables =======
  register = {
    nome: '',
    cognome: '',
    email: '',
    password: '',
  };

  //======= Constructor ========
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  //====== Hooks =========
  ngOnInit(): void {}

  //======= Form controls ========
  registerForm = this.formBuilder.group({
    nome: new FormControl([
      this.register.nome,
      {
        validators: [Validators.required],
      }
    ]),
    cognome: new FormControl([
      this.register.cognome,
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
        validators: [Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')],
      },
    ]),
  });
  //====== Locla functions ======
  onSubmit() {
    this.router.navigateByUrl('login')
  }

  get nome() {
    return this.registerForm.controls['nome'];
  }
  get cognome() {
    return this.registerForm.controls['cognome'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
}
