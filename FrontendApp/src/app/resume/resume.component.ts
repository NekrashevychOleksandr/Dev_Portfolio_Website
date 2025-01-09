import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  experience: { title: string; company: string; duration: string; description: string }[] = [
    {
      title: 'Software Engineer',
      company: 'Tech Solutions',
      duration: '2021 - Present',
      description: 'Developed web applications and APIs using Angular, Node.js, and MongoDB.',
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      duration: '2019 - 2021',
      description: 'Designed and implemented responsive UI components using Angular and SCSS.',
    },
    {
      title: 'Intern Developer',
      company: 'Startup Inc.',
      duration: '2018 - 2019',
      description: 'Assisted in developing a SaaS platform and conducted code reviews.',
    },
  ];

  education: { degree: string; institution: string; year: string }[] = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2018',
    },
    {
      degree: 'Diploma in Web Development',
      institution: 'Online Academy',
      year: '2016',
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
