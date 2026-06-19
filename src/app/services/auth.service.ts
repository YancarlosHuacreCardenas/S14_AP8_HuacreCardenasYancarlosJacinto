import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
    // Registrar usuario por defecto si no existe ninguno
    const users = this.getUsers();
    if (users.length === 0) {
      this.registerUser('Administrador', 'admin@miapp.com', '123456');
    }
  }

  // Obtener usuarios registrados desde localStorage
  private getUsers(): User[] {
    const data = localStorage.getItem('registeredUsers');
    return data ? JSON.parse(data) : [];
  }

  // Guardar lista de usuarios en localStorage
  private saveUsers(users: User[]): void {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  }

  // Registrar nuevo usuario
  registerUser(nombre: string, email: string, password: string): { success: boolean; message: string } {
    const users = this.getUsers();

    // Verificar si el correo ya está registrado
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return { success: false, message: 'Este correo electrónico ya está registrado.' };
    }

    users.push({ nombre, email, password });
    this.saveUsers(users);
    return { success: true, message: 'Registro exitoso. Ya puedes iniciar sesión.' };
  }

  // Iniciar sesión
  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userName', user.nombre);
      return true;
    }
    return false;
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  // Verificar si está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }
}
