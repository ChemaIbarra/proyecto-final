import { Injectable } from '@angular/core';
import { Habito } from '../models/habito-model';

@Injectable({ providedIn: 'root' })
export class HabitosServicio {
  private readonly KEY = 'app_habitos_v1';
  private habitos: Habito[] = [];

  constructor() {
    this.habitos = this.load();
  }

  private save() {
    localStorage.setItem(this.KEY, JSON.stringify(this.habitos));
  }

  private load(): Habito[] {
    const raw = localStorage.getItem(this.KEY);
    return raw ? JSON.parse(raw) : [];
  }

  listar(): Habito[] {
    return [...this.habitos];
  }

  crear(titulo: string, meta = 30): Habito {
    const h: Habito = {
      id: Date.now().toString(),
      titulo: titulo.trim(),
      progreso: 0,
      meta,
      creadoEn: Date.now()
    };
    this.habitos.push(h);
    this.save();
    return h;
  }

  eliminar(id: string) {
    this.habitos = this.habitos.filter(h => h.id !== id);
    this.save();
  }

  incrementar(id: string) {
    const h = this.habitos.find(x => x.id === id);
    if (!h) return;
    if (h.progreso < h.meta) {
      h.progreso++;
      this.save();
    }
  }

  reiniciar(id: string) {
    const h = this.habitos.find(x => x.id === id);
    if (!h) return;
    h.progreso = 0;
    this.save();
  }

  setAll(items: Habito[]) {
    this.habitos = items;
    this.save();
  }
}
