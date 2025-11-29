import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { InicioComponent } from './components/inicio-component/inicio-component';
import { MetasComponent } from './components/metas-component/metas-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'metas-enlace', component: MetasComponent},
    {path: 'perfil-enlace', component: PerfilComponent},
    {path: 'navbar-enlace', component: NavbarComponent}
];

