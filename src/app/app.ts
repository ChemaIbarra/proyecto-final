import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar-component></app-navbar-component>
    <div style="padding: 12px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
