import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/my-info',
    pathMatch: 'full',
  },
  {
    path: 'my-info',
    loadComponent: () => import('./pages/my-info/my-info.page').then( m => m.MyInfoPage)
  },
  {
    path: 'adder',
    loadComponent: () => import('./pages/adder/adder.page').then( m => m.AdderPage)
  },
  {
    path: 'translate-numbers',
    loadComponent: () => import('./pages/translate-numbers/translate-numbers.page').then( m => m.TranslateNumbersPage)
  },
  {
    path: 'multiply',
    loadComponent: () => import('./pages/multiply/multiply.page').then( m => m.MultiplyPage)
  },
  {
    path: 'video',
    loadComponent: () => import('./pages/video/video.page').then( m => m.VideoPage)
  },
  {
    path: 'joke',
    loadComponent: () => import('./pages/joke/joke.page').then( m => m.JokePage)
  },
];
