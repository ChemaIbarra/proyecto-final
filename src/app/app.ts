import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components } from './components/components';
import { NavbarComponent } from './components/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-final-jose');
}
