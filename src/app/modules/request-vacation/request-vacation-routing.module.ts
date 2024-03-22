import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from   './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: 'list/:idUser',
    component: ListComponent,
    title: 'Listar solicitud de vacaciones'
  },
  {
    path: 'detail/:idRequest/:idUser',
    component: DetailComponent,
    title: 'Detalle de solicitud de vacaciones'
  },
  {
    path: 'add/:idUser',
    component: AddComponent,
    title: 'Crear Solicitud de vacaciones'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestVacationRoutingModule { }
