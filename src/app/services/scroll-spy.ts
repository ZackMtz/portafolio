import { Service, signal } from '@angular/core';

@Service()
export class ScrollSpy {
  readonly activeId = signal('experiencia');
  observe(ids: string[]): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }
    window.addEventListener('scroll', () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom) {
        this.activeId.set(ids[ids.length - 1]);
      }
    });
  }
}
