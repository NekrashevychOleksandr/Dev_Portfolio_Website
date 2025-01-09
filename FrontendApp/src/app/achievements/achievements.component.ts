import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent {
  achievements: { title: string; description: string }[] = [
    { title: 'Certified Angular Developer', description: 'Completed the advanced Angular certification program.' },
    { title: 'Hackathon Winner', description: 'Won first place at XYZ Hackathon for innovative problem-solving.' },
    { title: 'Top 10% in Coding Challenge', description: 'Ranked in the top 10% in ABC coding competition.' },
    { title: 'Published Research Paper', description: 'Authored a paper on machine learning, published in DEF journal.' },
    { title: 'Open Source Contributor', description: 'Contributed to popular GitHub repositories like GHI library.' },
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
