import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: { title: string; description: string; link?: string }[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my projects and skills, built with Angular.',
      link: 'https://example.com/portfolio',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with shopping cart and payment integration.',
      link: 'https://example.com/ecommerce',
    },
    {
      title: 'AI Chatbot',
      description: 'An AI-powered chatbot using natural language processing and machine learning.',
      link: 'https://example.com/chatbot',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using real-time API data and geolocation.',
      link: 'https://example.com/weather',
    },
    {
      title: 'Game Development',
      description: 'Created a 2D platformer game with unique levels and mechanics.',
      link: 'https://example.com/game',
    },
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
