import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrismEditorComponent } from './prism-editor/prism-editor.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LateralBarComponent } from './components/lateral-bar/lateral-bar';
import { ProjectsComponent } from './components/projects/projects';

@NgModule({
  declarations: [
    AppComponent,
    PrismEditorComponent,
    CodeViewerComponent,
    LandingPageComponent,
    LoginComponent,
    WorkshopComponent,
    LateralBarComponent,
    ProjectsComponent
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
