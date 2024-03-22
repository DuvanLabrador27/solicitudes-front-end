import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    title: 'Listar Empleados'
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    title: 'Detalles Empleado'
  },
  {
    path: 'add',
    component: AddComponent,
    title: 'Crear Empleado'
  },
  {
    path: 'edit/:idEmployee',
    component: EditComponent,
    title: 'Editar Empleado'
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
export class EmployeesRoutingModule { }
