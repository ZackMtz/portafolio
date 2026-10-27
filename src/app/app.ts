import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './layout/nav/nav';
import { Hero } from './sections/hero/hero';

@Component({
  imports: [RouterOutlet, Nav, Hero],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio');
}
