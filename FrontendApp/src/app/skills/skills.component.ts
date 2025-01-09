import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS/SCSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git/GitHub',
    'RESTful APIs',
    'UI/UX Design',
  ];

  constructor(private router: Router) {}

  navigate(direction: 'prev' | 'next'): void {
    const routes = ['', 'about', 'projects','achievements', 'skills', 'resume', 'contact'];
    const currentIndex = routes.indexOf(this.router.url.replace('/', ''));
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % routes.length
        : (currentIndex - 1 + routes.length) % routes.length;
    this.router.navigate([routes[nextIndex]]);
  }
}
