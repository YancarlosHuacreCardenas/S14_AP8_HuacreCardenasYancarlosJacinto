import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = false;
  loginErrorMessage = '';
  isLoading = false;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Si ya está autenticado, redirigir a inicio
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getters para acceso fácil a los controles del formulario
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    // Marcar todos los campos como tocados para mostrar errores
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.loginError = false;

    // Simular un pequeño delay como en una petición real
    setTimeout(() => {
      const { email, password } = this.loginForm.value;
      const success = this.authService.login(email, password);

      if (success) {
        this.router.navigate(['/inicio']);
      } else {
        this.loginError = true;
        this.loginErrorMessage = 'Credenciales incorrectas. Verifica tu correo y contraseña.';
      }

      this.isLoading = false;
    }, 800);
  }
}
