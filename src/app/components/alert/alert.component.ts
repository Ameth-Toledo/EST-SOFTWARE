import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() tittle : string = '';
  @Input() mensaje : string = '';
  @Input() icono : string = '';
  @Input() tipo : string = '';

  getIconColor():string {
    if (this.tipo === 'error') {
      return 'red';
    } else if (this.tipo === 'warning') {
      return 'black'
    } else if (this.tipo === 'success') {
      return 'green';
    } 
    return 'gray';
  }
}
