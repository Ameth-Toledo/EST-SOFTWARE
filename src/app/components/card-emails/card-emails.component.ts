import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../../models/email';

@Component({
  selector: 'app-card-emails',
  standalone: true,
  imports: [],
  templateUrl: './card-emails.component.html',
  styleUrl: './card-emails.component.scss'
})
export class CardEmailsComponent {
  @Input() email!: Email;
  @Output() markAsAttended = new EventEmitter<void>();

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      alert('Correo copiado al portapapeles: ' + text);
    }).catch(err => {
      console.error('Error al copiar al portapapeles', err);
    });
  }

  handleMarkAsAttended(): void {
    this.markAsAttended.emit();
  }
}
