import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

import { EmployeesRoutingModule } from './employees-routing.module';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { DetailComponent } from './pages/detail/detail.component';

import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EmployeesModule { }
