import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
