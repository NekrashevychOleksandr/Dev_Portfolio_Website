import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { ResumeComponent } from './app/resume/resume.component';
import { ContactComponent } from './app/contact/contact.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AboutComponent } from './app/about/about.component';
import { SkillsComponent } from './app/skills/skills.component';
import { AchievementsComponent } from './app/achievements/achievements.component';


bootstrapApplication(AppComponent, {
  providers: [provideAnimations(),
    provideRouter([
      { path: '', component: HomeComponent, data: { animation: 'HomePage' } }, // Landing Page
      { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
      { path: 'achievements', component: AchievementsComponent, data: { animation: 'AboutPage' } },
      { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' } },
      { path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage' } },
      { path: 'skills', component: SkillsComponent, data: { animation: 'ResumePage' } },
      { path: 'contact', component: ContactComponent, data: { animation: 'ResumePage' } },
      { path: '**', redirectTo: '' } // Fallback for undefined routes
    ]),
  ],
}).catch(err => console.error(err));
