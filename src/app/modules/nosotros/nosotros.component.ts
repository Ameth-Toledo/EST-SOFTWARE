import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

}
