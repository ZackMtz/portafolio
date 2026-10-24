import { Experience } from '../models/experience.model';

// Datos de ejemplo. Se muestran en este orden: pon primero el puesto más reciente.
export const EXPERIENCE: Experience[] = [
  {
    company: 'Empresa Ejemplo',
    role: 'Desarrollador de Software',
    period: 'Ene 2024 — Actualidad',
    description: 'Breve descripción de tus responsabilidades en este puesto.',
    achievements: [
      'Un logro concreto, idealmente con un resultado medible.',
      'Otro logro relevante.',
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    company: 'Otra Empresa',
    role: 'Desarrollador Junior',
    period: 'Mar 2022 — Dic 2023',
    description: 'Breve descripción de tus responsabilidades en este puesto.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];
