import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailOrUserName: string = '';
  password: string = '';
  alertMessage: string = '';
  alertType: string = ''; 
  showAlert: boolean = false;

  readonly validCredentials = [
    { email: 'estsoftwareoficial@gmail.com', password: 'ESTSoftwareDevelop01', username: 'Ameth Toledo' },
    { email: 'agustinaconstantino55@gmail.com', password: 'ESTSoftwareDevelop02', username: 'Fabricio Perez' }
  ];

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    const isEmailValid = this.isValidEmail(this.emailOrUserName);
    const validUser = this.validCredentials.find(cred => 
      (isEmailValid && cred.email === this.emailOrUserName && cred.password === this.password) ||
      (!isEmailValid && cred.username === this.emailOrUserName && cred.password === this.password)
    );

    if (validUser) {
      this.loginSuccess();
    } else {
      this.showAlertMessage('Credenciales incorrectas. Verifica tu correo, usuario o contraseña.', 'error');
    }
  }

  isValidEmail(value: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  }

  loginSuccess(): void {
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/dashboard']);
    this.showAlertMessage('Ingreso exitoso.', 'success');
  }

  showAlertMessage(message: string, type: string): void {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
  }

  closeModal(): void {
    this.showAlert = false;
  }

  togglePassword() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const passwordIcon = document.querySelector('.toggle-password') as HTMLElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordIcon.classList.remove('fa-eye');
      passwordIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      passwordIcon.classList.remove('fa-eye-slash');
      passwordIcon.classList.add('fa-eye');
    }
  }
}
