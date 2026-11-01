import { Component, inject, afterNextRender } from '@angular/core';
import { ScrollSpy } from '../../services/scroll-spy';

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
  
  private readonly scrollSpy = inject(ScrollSpy);
  protected readonly activeId = inject(ScrollSpy).activeId;

  constructor(){
    afterNextRender(() =>{
      this.scrollSpy.observe(this.links.map((link) => link.id));
    });
  }
}
