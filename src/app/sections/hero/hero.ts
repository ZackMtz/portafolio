import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile.data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE;
}
