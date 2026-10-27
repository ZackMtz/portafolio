import { Component, signal } from '@angular/core';

interface NavLink{
  id: string;
  label: string;
}

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  protected readonly links: NavLink[] = [
    {id: 'experiencia', label: 'Experiencia'},
    {id: 'proyectos', label: 'Proyectos'},
    {id: 'sobre-mi', label: 'Sobre mí'},
    {id: 'contacto', label: 'Contacto'},
  ];
  
  protected readonly activeId = signal('experiencia');
}
