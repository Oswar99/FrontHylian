import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'workshop', component: WorkshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
