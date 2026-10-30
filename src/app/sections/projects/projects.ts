import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { PROJECTS } from '../../data/projects.data';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
