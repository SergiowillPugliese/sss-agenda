import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar-wrapper/calendar-wrapper.component').then(c => c.CalendarWrapperComponent)
  }
];
