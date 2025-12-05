import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HabitosServicio } from '../../services/habitos-servicio';
import { Habito } from '../../models/habito-model';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './metas-component.html'
})
export class MetasComponent {
  nuevoTitulo = '';
  metas: Habito[] = [];

  constructor(private habitosSrv: HabitosServicio) {
    this.cargar();
  }

  cargar() {
    this.metas = this.habitosSrv.listar();
  }

  agregar() {
    if (!this.nuevoTitulo.trim()) return;
    this.habitosSrv.crear(this.nuevoTitulo.trim(), 30);
    this.nuevoTitulo = '';
    this.cargar();
  }

  eliminar(id: string) {
    if (!confirm('Eliminar meta?')) return;
    this.habitosSrv.eliminar(id);
    this.cargar();
  }

  sumar(id: string) {
    this.habitosSrv.incrementar(id);
    this.cargar();
  }

  reiniciar(id: string) {
    if (!confirm('Reiniciar conteo?')) return;
    this.habitosSrv.reiniciar(id);
    this.cargar();
  }
}
