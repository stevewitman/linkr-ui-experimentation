import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';

// removed Common Module

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class CoreModule { }
