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

  readonly validEmail = 'estsoftwareoficial@gmail.com';
  readonly validPassword = 'ESTSoftwareDevelop';

  constructor (private router : Router) {}

  onSubmit(event : Event):void {
    event.preventDefault();

    const emailInput = (document.getElementById('email') as HTMLInputElement).value
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value

    if (emailInput === this.validEmail && passwordInput === this.validPassword) {
      this.router.navigate(['/dashboard']);
      this.showAlertMessage('Ingreso exitoso', 'success', 'fa-check-circle');
    } else {
      if (!emailInput.includes('@') || !emailInput.includes('.')) {
        this.showAlertMessage('Por favor ingresa un correo electrónico válido.', 'warning', 'fa-exclamation-circle');
      } else {
        this.showAlertMessage('Correo o contraseña incorrectos.', 'error', 'fa-triangle-exclamation');
      }
    }
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
