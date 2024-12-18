import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Email } from '../../models/email';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-emails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-emails.component.html',
  styleUrl: './card-emails.component.scss'
})
export class CardEmailsComponent {
  @Input() email!: Email;
  @Output() markAsAttended = new EventEmitter<void>();

  isModalVisible : boolean = false;
  copiedEmail : string = '';

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedEmail = text
      this.showModal();
    }).catch(err => {
      console.error('Error al copiar al portapapeles', err);
    });
  }

  handleMarkAsAttended(): void {
    this.markAsAttended.emit();
  }

  showModal():void {
    this.isModalVisible = true;
    setTimeout(() => {
      this.isModalVisible = false;
      this.copiedEmail = '';
    }, 3000);
  }
}
