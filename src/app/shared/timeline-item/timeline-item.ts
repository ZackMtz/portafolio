import { Component, input } from '@angular/core';
import { TechTag } from '../tech-tag/tech-tag';
import { Experience } from '../../models/experience.model';

@Component({
  imports: [TechTag],
  selector: 'app-timeline-item',
  styleUrl: './timeline-item.css',
  templateUrl: './timeline-item.html',
})
export class TimelineItem {
  readonly experience = input.required<Experience>();
}
