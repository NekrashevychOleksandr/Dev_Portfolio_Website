import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: HomeComponent },
      { path: 'achievements', component: HomeComponent },
      { path: 'projects', component: HomeComponent },
      { path: 'skills', component: HomeComponent },
      { path: 'resume', component: HomeComponent },
      { path: 'contact', component: HomeComponent },
    ]),
  ],
}).catch(err => console.error(err));
