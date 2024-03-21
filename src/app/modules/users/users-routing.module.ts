import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    title: 'Listar Usuarios'
  },
  {
    path: 'add',
    component: AddComponent,
    title: 'Crear Usuario'
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
