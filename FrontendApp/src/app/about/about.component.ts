import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'], // Note: Corrected `styleUrl` to `styleUrls`
})
export class AboutComponent {
  skills: string[] = [
    'JavaScript',
    'Angular',
    'TypeScript',
    'Node.js',
    'Python',
    'Machine Learning',
    'CSS & SCSS',
    'Responsive Design',
    'Git & GitHub',
  ];

  constructor(private router: Router) {}

  navigate(direction: 'prev' | 'next'): void {
    // Define the order of sections
    const routes = ['', 'about', 'projects','achievements', 'skills', 'resume', 'contact'];
    // Find the current section index
    const currentIndex = routes.indexOf(this.router.url.replace('/', ''));
    // Calculate the next or previous section index
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % routes.length
        : (currentIndex - 1 + routes.length) % routes.length;
    // Navigate to the next or previous section
    this.router.navigate([routes[nextIndex]]);
  }
}
