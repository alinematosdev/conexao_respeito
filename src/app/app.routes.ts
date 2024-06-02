import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'conteudo-denuncia',
    loadComponent: () => import('./pages/conteudo-denuncia/conteudo-denuncia.page').then( m => m.ConteudoDenunciaPage)
  },
];
