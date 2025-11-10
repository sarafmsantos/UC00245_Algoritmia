import { Routes } from '@angular/router';
import { aula02 } from './pages/aula02/aula02';
import { aula01 } from './pages/aula01/aula01';
import { aula03 } from './pages/aula03/aula03';

 
export const routes: Routes = [
  { path: '', redirectTo: 'aula03', pathMatch: 'full' },
  { path: 'aula01', component: aula01 },
  { path: 'aula02', component: aula02 },
  { path: 'aula03', component: aula03 },
  // { path: 'Welcome', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
  // { path: 'Welcome', component: Welcome},
 
  { path: '**', component: aula01 },
];