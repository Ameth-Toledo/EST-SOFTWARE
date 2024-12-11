import { Component, AfterViewInit } from '@angular/core';
import { EmailsService } from '../../services/emails/emails.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardDisponibilidadComponent } from '../../components/card-disponibilidad/card-disponibilidad.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, CardDisponibilidadComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  formVisible: boolean = false;
  nombre: string = '';
  email: string = '';
  celular: string = '';
  descripcion: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = ''; 
  alertIcon: string = '';

  constructor(private emailsService: EmailsService) {}

  ngAfterViewInit(): void {}

  toggleForm(): void {
    this.formVisible = !this.formVisible;
  }

  validateForm(): boolean {
    if (!this.nombre || !this.email || !this.celular || !this.descripcion) {
      this.showAlertMessage('Advertencia: Todos los campos son obligatorios.', 'warning', 'fa-solid fa-triangle-exclamation');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      this.showAlertMessage('Error: Ingresa un correo electrónico válido.', 'error', 'fa-solid fa-times-circle');
      return false;
    }

    if (this.celular.length !== 10 || isNaN(Number(this.celular))) {
      this.showAlertMessage('Error: El número de celular debe tener 10 dígitos numéricos.', 'error', 'fa-solid fa-times-circle');
      return false;
    }

    return true;
  }

  submitForm(): void {
    if (this.validateForm()) {
      const formData = new FormData();
      formData.append('name_email', this.nombre);
      formData.append('email_user', this.email);
      formData.append('description', this.descripcion);
      formData.append('phone_number', this.celular);
    
      this.emailsService.createEmail(formData).subscribe({
        next: () => {
          this.showAlertMessage('¡Todo está bien! El proceso se completó con éxito.', 'success', 'fa-solid fa-check-circle');
          this.resetForm();
        },
        error: (err) => {
          const errorDetail = err.error?.detail || 'Algo salió mal. Intenta de nuevo.';
          this.showAlertMessage(`Error: ${errorDetail}`, 'error', 'fa-solid fa-times-circle');
        }
      });
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

  resetForm(): void {
    this.nombre = '';
    this.email = '';
    this.celular = '';
    this.descripcion = '';
    this.formVisible = false;
  }
}
