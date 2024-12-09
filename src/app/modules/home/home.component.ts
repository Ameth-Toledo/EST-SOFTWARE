import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ValueChangeEvent } from '@angular/forms';

declare const particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

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
}
