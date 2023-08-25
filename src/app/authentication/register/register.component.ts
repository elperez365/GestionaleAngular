import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/shared/auth.service';
import { Router } from '@angular/router';

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
    this.authService.signUp(this.registerForm.value).subscribe((res) => {
      if (res.result) {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    });
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
