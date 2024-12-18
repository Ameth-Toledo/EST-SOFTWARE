import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-ver-ayudas',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './ver-ayudas.component.html',
  styleUrl: './ver-ayudas.component.scss'
})
export class VerAyudasComponent {

}
