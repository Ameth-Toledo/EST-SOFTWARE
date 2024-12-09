import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { ProgramadoresComponent } from './modules/programadores/programadores.component';
import { ContactarComponent } from './modules/contactar/contactar.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "", component: HomeComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "programadores", component: ProgramadoresComponent },
    { path: "contactar", component: ContactarComponent},
    { path: "**", component: NotfoundComponent}
];
