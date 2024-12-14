import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  alertMessage: string = '';
  alertType: string = ''; 
  alertIcon: string = '';
  showAlert: boolean = false;

  readonly validEmail01 = 'estsoftwareoficial@gmail.com';
  readonly validPassword01 = 'ESTSoftwareDevelop01';
  readonly userName01 = 'Ameth Toledo'; 

  readonly validEmail02 = 'agustinaconstantino55@gmail.com';
  readonly validPassword02 = 'ESTSoftwareDevelop02';
  readonly userName02 = 'Fabricio Perez';

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    const emailOrUserNameInput = (document.getElementById('emailOrUserName') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    if (this.isValidEmail(emailOrUserNameInput)) {
      if (
        (emailOrUserNameInput === this.validEmail01 && passwordInput === this.validPassword01) || 
        (emailOrUserNameInput === this.validEmail02 && passwordInput === this.validPassword02)
      ) {
        this.loginSuccess();
      } else {
        this.showAlertMessage('Correo o contraseña incorrectos.', 'error', 'fa-triangle-exclamation');
      }
    } else {
      if (
        (emailOrUserNameInput === this.userName01 && passwordInput === this.validPassword01) || 
        (emailOrUserNameInput === this.userName02 && passwordInput === this.validPassword02)
      ) {
        this.loginSuccess();
      } else {
        this.showAlertMessage('Nombre de usuario o contraseña incorrectos.', 'error', 'fa-triangle-exclamation');
      }
    }
  }

  isValidEmail(value: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  }

  loginSuccess(): void {
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/dashboard']);
    this.showAlertMessage('Ingreso exitoso', 'success', 'fa-check-circle');
  }

  showAlertMessage(message: string, type: string, icon: string): void {
    this.alertMessage = message;
    this.alertType = type;
    this.alertIcon = icon;
    this.showAlert = true;
  }

  closeModal(): void {
    this.showAlert = false;
  }
}
