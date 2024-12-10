import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-disponibilidad',
  standalone: true,
  imports: [],
  templateUrl: './card-disponibilidad.component.html',
  styleUrl: './card-disponibilidad.component.scss'
})
export class CardDisponibilidadComponent {
  @Input() disponibilidad : string = '';
  @Input() imgSrc : string = '';
}
