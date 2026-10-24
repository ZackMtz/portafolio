import { Profile } from '../models/profile.model';

// Datos de ejemplo: reemplázalos por los tuyos.
export const PROFILE: Profile = {
  name: 'Jose David Martinez Guayabo',
  role: 'Desarrollador de Software',
  description:
    'Construyo aplicaciones web accesibles y mantenibles.',
  availableForWork: true,
  photo: {
    src: '/images/foto.webp',
    alt: 'Fotografía de Tu Nombre',
    width: 320,
    height: 320,
  },
  email: 'jdm.guayabo@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/jose-david-martinez-guayabo-b2134b3ab/',
    github: 'https://github.com/ZackMtz?tab=overview&from=2026-10-01&to=2026-10-24',
    cv: '/cv.pdf',
  },
  about: [
    'Primer párrafo sobre ti: quién eres y qué te motiva.',
    'Segundo párrafo: qué estás aprendiendo y qué tipo de proyectos te interesan.',
  ],
};
