import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { ProgramadoresComponent } from './modules/programadores/programadores.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { ComentariosComponent } from './modules/comentarios/comentarios.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "", component: HomeComponent },
    { path: "nosotros", component: NosotrosComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "programadores", component: ProgramadoresComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [authGuard] },
    { path: "comentarios", component: ComentariosComponent, canActivate: [authGuard] }, 
    { path: "**", component: NotfoundComponent}
];
