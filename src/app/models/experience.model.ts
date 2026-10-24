export interface Experience {
  company: string;
  role: string;
  /** Texto ya formateado, p. ej. "Ene 2023 — Actualidad". */
  period: string;
  description: string;
  achievements?: string[];
  technologies: string[];
}
