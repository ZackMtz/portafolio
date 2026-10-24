 /** Imagen estática servida desde `public/`. */
export interface ImageAsset {
  src: string;
  alt: string;
  /** NgOptimizedImage necesita el tamaño real para reservar espacio y evitar saltos. */
  width: number;
  height: number;
}
