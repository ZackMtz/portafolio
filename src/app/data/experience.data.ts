import { Experience } from '../models/experience.model';

// Experiencia real. Se muestra en este orden: el puesto más reciente va primero.
export const EXPERIENCE: Experience[] = [
  {
    company: 'UDI',
    role: 'Desarrollador Backend · Proyecto de grado',
    period: 'Mar 2025 — Ago 2026',
    description:
      'Coautor del sistema de la Oficina de Calidad, hoy en producción. Proyecto de grado con mención honorífica.',
    achievements: [
      'Construcción de API REST de 257 servicios con 554 pruebas automatizadas en PHPUnit.',
      'Implementación de control de acceso por roles (RBAC).',
      'Modelado de jerarquía de N niveles con el patrón Composite para adaptarse a futuros cambios del modelo del CNA.',
      'Desarrollo de informes y alertas para el seguimiento de cada programa y sede, como apoyo a la acreditación en alta calidad.',
    ],
    technologies: ['Laravel', 'PHP', 'PostgreSQL', 'Vue.js', 'TypeScript', 'PHPUnit'],
  },
  {
    company: 'CDMB',
    role: 'Practicante de Desarrollo y QA',
    period: 'Mar 2026 — Jun 2026',
    description:
      'Práctica profesional en el área de TI de la autoridad ambiental del área metropolitana de Bucaramanga, apoyando la modernización de sus servicios digitales.',
    achievements: [
      'Migración del portal institucional a la Sede Electrónica de MinTIC, organizando los contenidos según el Índice de Transparencia.',
      'Intalación, documentación y pruebas con usuarios de Formbricks y LibreBooking para distintas áreas de la entidad.',
      'Definición de los requerimientos y la configuración de un prototipo de agente conversacional local con Ollama para consultas sobre trámites ambientales.',
    ],
    technologies: ['Ollama', 'Formbricks', 'LibreBooking', 'PHP', 'Docker', 'PostgreSQL'],
  },
];