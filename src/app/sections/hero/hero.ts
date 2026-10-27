import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile.data';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE;
}
