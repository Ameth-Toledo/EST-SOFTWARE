import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor (private router : Router) {}

  sendHome(event : Event) {
    event.preventDefault();
    this.router.navigate(['']);
  }

  SendUs(event : Event) {
    event.preventDefault();
    this.router.navigate(['/nosotros']);
  }

  sendServicios(event : Event) {
    event.preventDefault();
    this.router.navigate(['/servicios']);
  }

  sendProgramers(event : Event) {
    event.preventDefault();
    this.router.navigate(['/programadores']);
  }

  sendLogin(event : Event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.querySelector('.header-menu');
    if (menu) {
      if (this.isMenuOpen) {
        menu.classList.add('open');
      } else {
        menu.classList.remove('open');
      }
    }
  }   
}
