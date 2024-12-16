import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CardEmailsComponent } from "../../components/card-emails/card-emails.component";
import { Email } from '../../models/email';
import { EmailsService } from '../../services/emails/emails.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emails-atendidos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, CardEmailsComponent],
  templateUrl: './emails-atendidos.component.html',
  styleUrl: './emails-atendidos.component.scss'
})
export class EmailsAtendidosComponent implements OnInit {
  attendedEmails: Email[] = []; 

  constructor(private emailsService: EmailsService) {}

  ngOnInit(): void {
    this.loadAttendedEmails();
  }

  loadAttendedEmails(): void {
    this.emailsService.getAllEmails().subscribe(emails => {
      this.attendedEmails = emails.filter(email => email.status === 'attended');
    });
  }
}
