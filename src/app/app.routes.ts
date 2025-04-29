import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent}
];
