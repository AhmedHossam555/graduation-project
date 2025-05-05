import { Routes } from '@angular/router';


export const routes: Routes = [
  {path:'login',loadComponent: () => import('./core/pages/login/login.component').then(m => m.LoginComponent)},
  {path:'register',loadComponent: () => import('./core/pages/register/register.component').then(m => m.RegisterComponent)},
  {path:'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),children:[
    {path:'', redirectTo:'projects', pathMatch:'full'},
    {path:'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)}, 
    {path:'teams', loadComponent: ()=> import('./pages/teams/teams.component').then(m => m.TeamsComponent)}
  ]},
  {path:'main-dashboard', loadComponent: () => import('./pages/main-dashboard/main-dashboard.component').then(m => m.MainDashboardComponent), children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)},
    {path:'task',loadComponent: () => import('./pages/task/task.component').then(m => m.TaskComponent)},
    {path:'chat', loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent)}, 
    {path:'notification', loadComponent: () => import('./pages/notification/notification.component').then(m => m.NotificationComponent)},
    {path:'backlog', loadComponent: () => import('./pages/backlog/backlog.component').then(m => m.BacklogComponent)},
    {path:'active-sprint', loadComponent: () => import('./pages/active-sprint/active-sprint.component').then(m => m.ActiveSprintComponent)},
  ] }
];
