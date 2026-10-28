import { Component } from '@angular/core';
import { TimelineItem } from '../../shared/timeline-item/timeline-item';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  imports: [TimelineItem],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
}
