import { Routes } from '@angular/router';
import { aula02 } from './pages/aula02/aula02';
import { aula01 } from './pages/aula01/aula01';
 
export const routes: Routes = [
  { path: '', redirectTo: 'aula02', pathMatch: 'full' },
  { path: 'aula01', component: aula01 },
  { path: 'aula02', component: aula02 },
  // { path: 'Welcome', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
  // { path: 'Welcome', component: Welcome},
 
  { path: '**', component: aula01 },
];