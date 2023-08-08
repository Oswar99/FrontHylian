import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrismEditorComponent } from './components/prism-editor/prism-editor.component';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LateralBarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './projects/projects';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup';
import { TryItComponent } from './try-it/try-it';
import {  NavLogoComponent } from './components/navbar/navlogo';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { SimpleModal } from './components/modals/simple-modal';
import { LoadingPage } from './components/loading-page/loading-page';

@NgModule({
  declarations: [
    AppComponent,
    PrismEditorComponent,
    CodeViewerComponent,
    LandingPageComponent,
    LoginComponent,
    LateralBarComponent,
    ProjectsComponent,
    UserProfileComponent,
    SignupComponent,
    TryItComponent,
    NavLogoComponent,
    UserProfileEditComponent,
    RegisteredUsersComponent,
    SimpleModal,
    LoadingPage
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
