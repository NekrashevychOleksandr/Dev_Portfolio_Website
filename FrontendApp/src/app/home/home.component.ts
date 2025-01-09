import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private components = ['', 'about', 'projects','achievements', 'skills', 'resume', 'contact']; // Define available components/routes
  private currentIndex = 0; // Track the current index

  constructor(private router: Router) {}

  navigate(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.currentIndex = (this.currentIndex - 1 + this.components.length) % this.components.length;
    } else if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.components.length;
    }

    const route = `/${this.components[this.currentIndex]}`; // Determine the next route
    this.router.navigate([route]);
  }
}
