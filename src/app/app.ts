import { Component } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { About } from './sections/about/about';
import { Footer } from './layout/footer/footer';

@Component({
  imports: [Nav, Hero, Experience, Projects, About, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
}
