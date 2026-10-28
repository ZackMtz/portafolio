import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tech-tag',
  styleUrl: './tech-tag.css',
  template: ` 
    <span class="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
      {{ name() }}   
    </span>
  `,
})
export class TechTag {
  readonly name = input.required<string>();
}
