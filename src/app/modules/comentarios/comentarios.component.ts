import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CardComentariosComponent } from "../../components/card-comentarios/card-comentarios.component";

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CardComentariosComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.scss'
})
export class ComentariosComponent {

}
