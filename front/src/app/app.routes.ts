import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'page/new-activitie',
    loadComponent: () => import('./new-activitie/new-activitie.page').then( m => m.NewActivitiePage)
  },


];
