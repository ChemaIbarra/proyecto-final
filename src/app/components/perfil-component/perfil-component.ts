import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioServicio } from '../../services/usuario-servicio';
import { Usuario } from '../../models/usuario-model';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './perfil-component.html'
})
export class PerfilComponent {
  usuario: Usuario = { nombre: '' };

  constructor(private usuarioSrv: UsuarioServicio) {
    this.usuario = this.usuarioSrv.obtener();
  }

  guardar() {
    this.usuarioSrv.guardar(this.usuario);
    alert('Perfil guardado');
  }

  limpiar() {
    this.usuario = { nombre: '' };
    this.usuarioSrv.limpiar();
  }
}
