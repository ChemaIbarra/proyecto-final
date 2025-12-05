import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio-component/inicio-component';
import { MetasComponent } from './components/metas-component/metas-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'metas', component: MetasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', redirectTo: '' }
];
