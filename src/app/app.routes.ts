import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { ProgramadoresComponent } from './modules/programadores/programadores.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { LoginComponent } from './modules/login/login.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "", component: HomeComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "programadores", component: ProgramadoresComponent },
    { path: "login", component: LoginComponent },
    { path: "**", component: NotfoundComponent}
];
