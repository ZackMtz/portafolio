import { Profile } from '../models/profile.model';

// Datos del perfil: se muestran en la presentación, "Sobre mí" y el contacto.
export const PROFILE: Profile = {
  name: 'Jose David Martinez Guayabo',
  role: 'Desarrollador de Software',
  description:
    'Soy de Bucaramanga, Colombia, y fui coautor del sistema que hoy usa la Oficina de Calidad de la UDI. Me enfoco en backend y estoy profundizando en Java y Spring Boot.',
  availableForWork: true,
  photo: {
    src: 'C:\Users\Zacko\Downloads\fotico.webp',
    alt: 'Fotografía de Jose David Martinez Guayabo',
    width: 320,
    height: 320,
  },
  email: 'jdm.guayabo@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/jose-david-martinez-guayabo-b2134b3ab/',
    github: 'https://github.com/ZackMtz',
    cv: 'C:\Users\Zacko\Downloads\HV Jose Martinez.pdf',
  },
  about: [
    'Estudié Ingeniería de Sistemas en la UDI, donde fui coautor del sistema de la Oficina de Calidad: una API REST de 257 servicios con 554 pruebas automatizadas, que hoy está en producción.',
    'Hice mi práctica profesional en la CDMB, apoyando la modernización de sus servicios digitales, y obtuve la calificación máxima de mi tutor empresarial.',
    'Hoy estoy profundizando en Java, Spring Boot y Angular. Este portafolio es mi primer proyecto con Angular.',
  ],
};