import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup';
import { TryItComponent } from './try-it/try-it';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

const routes: Routes = [
  {path: '', component:LandingPageComponent},
  {path: 'try-it', component:TryItComponent},
  {path: 'login', component:LoginComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'user-profile-edit', component: UserProfileEditComponent},
  {path: 'registered-users', component: RegisteredUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
