import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  sendComents(event : Event) {
    event.preventDefault();
    this.router.navigate(['/comentarios'])
  }

  sendDashboard(event : Event) {
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }

  sendEmails(event : Event) {
    event.preventDefault();
    this.router.navigate(['/emails']);
  }

  sendEmailAtendidos(event : Event) {
    event.preventDefault();
    this.router.navigate(['/email-atendidos']);
  }
}
