import { ImageAsset } from './image-asset.model';

export interface Profile {
  name: string;
  /** Ej.: "Desarrollador de Software" */
  role: string;
  description: string;
  /** Muestra u oculta la insignia "Disponible para trabajar". */
  availableForWork: boolean;
  photo: ImageAsset;
  email: string;
  links: ProfileLinks;
  /** Un párrafo por elemento. */
  about: string[];
}

export interface ProfileLinks {
  linkedin: string;
  github: string;
  /** Ruta al PDF dentro de `public/`, p. ej. "/cv.pdf". */
  cv: string;
}
