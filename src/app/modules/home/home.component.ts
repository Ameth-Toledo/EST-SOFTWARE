import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { CardDisponibilidadComponent } from "../../components/card-disponibilidad/card-disponibilidad.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AlertComponent } from "../../components/alert/alert.component";

declare const particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardDisponibilidadComponent, FooterComponent, AlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{
  formVisible : boolean = false;

  ngAfterViewInit(): void {
    if (particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.1 },
          size: { value: 3 },
          move: { speed: 1 }
        }
      });
    } else {
      console.error('particles.js is not loaded!');
    }
  }

  toggleForm(): void {
    this.formVisible = !this.formVisible;
  }
}
