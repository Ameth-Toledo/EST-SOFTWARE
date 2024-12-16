import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CardComentariosComponent } from "../../components/card-comentarios/card-comentarios.component";
import { ComentsService } from '../../services/coments/coments.service';
import { Coments } from '../../models/coments';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, CardComentariosComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.scss'
})
export class ComentariosComponent implements OnInit {
  comentarios: Coments[] = [];

  constructor (private comentsService : ComentsService) {}

  ngOnInit(): void {
      this.loadComents();
  }

  loadComents(): void {
    this.comentsService.getAllComents().subscribe(
      (coments : Coments[]) => {
        this.comentarios = coments;
      },
      (error : any) => {
        console.error('Error al cargar los comentarios: ', error);
      }
    )
  }
}
