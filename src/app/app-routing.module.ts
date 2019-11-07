import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';

const routes: Routes = 
  [
    {path:"projetos",
    component:ListaProjetosComponent
    },

    {path:"Novo-Projeto",
    component: NovoProjetoComponent
    },

    {path:"Detalhe-Projeto/:id", //o id significa que ele é dinâmico
    component: DetalheProjetoComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
