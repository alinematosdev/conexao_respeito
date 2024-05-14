import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'adicionar-atividade',
    loadComponent: () => import('./adicionar-atividade/adicionar-atividade.page').then( m => m.AdicionarAtividadePage)
  },
  //{
    //path: 'tab4',
    //loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  //},
];
