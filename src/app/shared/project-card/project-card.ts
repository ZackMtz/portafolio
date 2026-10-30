import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Project } from '../../models/project.model';
import { TechTag } from '../tech-tag/tech-tag';


@Component({
  imports: [TechTag, NgOptimizedImage],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
