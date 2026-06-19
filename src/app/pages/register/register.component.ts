import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerError = false;
  registerErrorMessage = '';
  registerSuccess = false;
  registerSuccessMessage = '';
  isLoading = false;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Si ya está autenticado, redirigir a inicio
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    }

    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // Getters
  get nombre() { return this.registerForm.get('nombre'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordsMatch(): boolean {
    return this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  }

  onSubmit(): void {
    this.registerForm.markAllAsTouched();
    this.registerError = false;
    this.registerSuccess = false;

    if (this.registerForm.invalid) {
      return;
    }

    if (!this.passwordsMatch()) {
      this.registerError = true;
      this.registerErrorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      const { nombre, email, password } = this.registerForm.value;
      const result = this.authService.registerUser(nombre, email, password);

      if (result.success) {
        this.registerSuccess = true;
        this.registerSuccessMessage = result.message;
        this.registerError = false;

        // Redirigir al login después de 2 segundos
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      } else {
        this.registerError = true;
        this.registerErrorMessage = result.message;
        this.registerSuccess = false;
      }

      this.isLoading = false;
    }, 800);
  }
}
