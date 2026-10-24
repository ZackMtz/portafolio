import { Project } from '../models/project.model';

// Datos de ejemplo. Para agregar un proyecto, agrega un objeto a este arreglo.
// Para mostrar una imagen, guárdala en `public/images/proyectos/` y añade:
//   image: { src: '/images/proyectos/mi-proyecto.webp', alt: '...', width: 1280, height: 720 },
export const PROJECTS: Project[] = [
  {
    title: 'Proyecto de ejemplo',
    description: 'Qué problema resuelve el proyecto y qué aprendiste al hacerlo.',
    technologies: ['Angular', 'TypeScript'],
    repoUrl: 'https://github.com/tu-usuario/proyecto-de-ejemplo',
    demoUrl: 'https://ejemplo.com',
  },
  {
    title: 'Otro proyecto',
    description: 'Descripción breve del segundo proyecto.',
    technologies: ['Node.js', 'Express'],
    repoUrl: 'https://github.com/tu-usuario/otro-proyecto',
  },
];
