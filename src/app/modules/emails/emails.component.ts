import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CardEmailsComponent } from "../../components/card-emails/card-emails.component";
import { Email } from '../../models/email';
import { EmailsService } from '../../services/emails/emails.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, CardEmailsComponent],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.scss'
})
export class EmailsComponent {
  pendingEmails: Email[] = [];
  loading: boolean = true;

  constructor(private emailService: EmailsService) {}

  ngOnInit(): void {
    this.loadEmails();
  }

  loadEmails(): void {
    this.emailService.getAllEmails().subscribe(
      (emails: Email[]) => { 
        this.pendingEmails = emails; 
        this.loading = false; 
      },
      (error: any) => {
        console.error('Error al cargar los emails:', error);
        this.loading = false; 
      }
    );
  }  

  markAsAttended(email: Email): void {
    this.emailService.updateStatus(email.id_email, 'attended').subscribe(() => {
      this.pendingEmails = this.pendingEmails.filter(e => e.id_email !== email.id_email);
    });
  }
}
