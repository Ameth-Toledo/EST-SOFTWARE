import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { ProgramadoresComponent } from './modules/programadores/programadores.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { ComentariosComponent } from './modules/comentarios/comentarios.component';
import { EmailsComponent } from './modules/emails/emails.component';
import { authGuard } from './guard/auth.guard';
import { EmailsAtendidosComponent } from './modules/emails-atendidos/emails-atendidos.component';
import { VerAyudasComponent } from './modules/ver-ayudas/ver-ayudas.component';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: "full" },
    { path: "", component: HomeComponent },
    { path: "ayuda", component: NosotrosComponent },
    { path: "servicios", component: ServiciosComponent },
    { path: "programadores", component: ProgramadoresComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [authGuard] },
    { path: "comentarios", component: ComentariosComponent, canActivate: [authGuard] }, 
    { path: "emails", component: EmailsComponent, canActivate: [authGuard]},
    { path: "email-atendidos", component: EmailsAtendidosComponent, canActivate: [authGuard]},
    { path: "ver-ayudas", component: VerAyudasComponent, canActivate: [authGuard]},
    { path: "**", component: NotfoundComponent}
];
