import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario-model';

@Injectable({ providedIn: 'root' })
export class UsuarioServicio {
  private readonly KEY = 'app_usuario_v1';

  obtener(): Usuario {
    const raw = localStorage.getItem(this.KEY);
    return raw ? JSON.parse(raw) : { nombre: '' };
  }

  guardar(u: Usuario) {
    localStorage.setItem(this.KEY, JSON.stringify(u));
  }

  limpiar() {
    localStorage.removeItem(this.KEY);
  }
}
