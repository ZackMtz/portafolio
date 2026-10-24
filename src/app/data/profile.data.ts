import { Profile } from '../models/profile.model';

// Datos de ejemplo: reemplázalos por los tuyos.
export const PROFILE: Profile = {
  name: 'Tu Nombre',
  role: 'Desarrollador de Software',
  description:
    'Construyo aplicaciones web accesibles y mantenibles con Angular y TypeScript.',
  availableForWork: true,
  photo: {
    src: '/images/foto.webp',
    alt: 'Fotografía de Tu Nombre',
    width: 320,
    height: 320,
  },
  email: 'correo@ejemplo.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/tu-usuario',
    github: 'https://github.com/tu-usuario',
    cv: '/cv.pdf',
  },
  about: [
    'Primer párrafo sobre ti: quién eres y qué te motiva.',
    'Segundo párrafo: qué estás aprendiendo y qué tipo de proyectos te interesan.',
  ],
};
