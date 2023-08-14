import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './projects/projects';
import { SignupComponent } from './signup/signup';
import { TryItComponent } from './try-it/try-it';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectVisualizer } from './project-visualizer/project-visualizer';
import { UserViewComponent } from './user-view/user-view';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'try-it', component:TryItComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectVisualizer},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'registered-users', component: RegisteredUsersComponent},
  {path: 'users/:id', component: UserViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
