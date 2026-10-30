import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './layout/nav/nav';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { About } from './sections/about/about';
import { Footer } from './layout/footer/footer';

@Component({
  imports: [RouterOutlet, Nav, Hero, Experience, Projects, About, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio');
}
