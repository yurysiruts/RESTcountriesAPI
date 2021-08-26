import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoyoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LoyoutRoutingModule
  ]
})
export class LayoutModule { }