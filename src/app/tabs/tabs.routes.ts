import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CadastroPage } from '../pages/cadastro/cadastro.page';
import { LoginPage } from '../pages/login/login.page';
import { AdicionarAtividadePage } from '../pages/adicionar-atividade/adicionar-atividade.page';
import { AdicionarMaterialPage } from '../pages/adicionar-material/adicionar-material.page';
import { CadastroEstudantePage } from '../pages/cadastro-estudante/cadastro-estudante.page';
import { CadastroProfessorPage } from '../pages/cadastro-professor/cadastro-professor.page';
import { CadastroResponsavelPage } from '../pages/cadastro-responsavel/cadastro-responsavel.page';
import { DenunciaPage } from '../pages/denuncia/denuncia.page';
import { ConteudoAtividadePage } from '../pages/conteudo-atividade/conteudo-atividade.page';
import { ConteudoMaterialPage } from '../pages/conteudo-material/conteudo-material.page';
import { ConteudoDenunciaPage } from '../pages/conteudo-denuncia/conteudo-denuncia.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'materiais',
        loadComponent: () =>
          import('../pages/materiais/materiais.page').then((m) => m.MateriaisPage),
      },
      {
        path: 'atividades',
        loadComponent: () =>
          import('../pages/atividades/atividades.page').then((m) => m.AtividadesPage),
      },
      {
        path: 'pessoas',
        loadComponent: () =>
          import('../pages/pessoas/pessoas.page').then((m) => m.PessoasPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginPage,
    children: [
    ]
  },

  {
    path: 'cadastro',
    component: CadastroPage,
    children: [
    ]
  },

  {
    path: 'cadastro/estudante',
    component: CadastroEstudantePage,
    children: [
    ]
  },

  {
    path: 'cadastro/professor',
    component: CadastroProfessorPage,
    children: [
    ]
  },

  {
    path: 'cadastro/responsavel',
    component: CadastroResponsavelPage,
    children: [
    ]
  },

  {
    path: 'atividades/adicionaratividade',
    component: AdicionarAtividadePage,
    children: [
    ]
  },

  {
    path: 'materiais/adicionarmaterial',
    component: AdicionarMaterialPage,
    children: [
    ]
  },

  {
    path: 'denuncia',
    component: DenunciaPage,
    children: [
    ]
  },
  {
    path: 'atividades/conteudoatividade',
    component: ConteudoAtividadePage,
    children: [
    ]
  },
  {
    path: 'atividades/conteudoatividade/:id',
    component: ConteudoAtividadePage,
    children: [
    ]
  },
  {
    path: 'materiais/conteudomaterial',
    component: ConteudoMaterialPage,
    children: [
    ]
  },
  {
    path: 'materiais/conteudomaterial/:id',
    component: ConteudoMaterialPage,
    children: [
    ]
  },
  {
    path: 'conteudodenuncia',
    component: ConteudoDenunciaPage,
    children: [
    ]
  },

];
