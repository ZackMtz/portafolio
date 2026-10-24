import { ImageAsset } from './image-asset.model';

export interface Project {
  title: string;
  description: string;
  /** Opcional: sin imagen, la tarjeta muestra un respaldo visual. */
  image?: ImageAsset;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}
