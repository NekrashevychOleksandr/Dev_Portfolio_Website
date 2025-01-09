import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private router: Router) {}

  navigate(direction: 'prev' | 'next'): void {
    const routes = ['', 'about', 'projects','achievements', 'skills', 'resume', 'contact']; // Define available components/routes
    const currentIndex = routes.indexOf(this.router.url.replace('/', ''));
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % routes.length
        : (currentIndex - 1 + routes.length) % routes.length;
    this.router.navigate([routes[nextIndex]]);
  }
}
