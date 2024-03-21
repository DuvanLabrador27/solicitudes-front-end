import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestVacationRoutingModule } from './request-vacation-routing.module';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RequestVacationRoutingModule,
    SharedModule
  ]
})
export class RequestVacationModule { }
