import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarMainComponent } from './toolbar-main/toolbar-main.component';

@NgModule({
  declarations: [
    LoginComponent,
    ToolbarMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ToolbarMainComponent,
  ]
})
export class CoreModule { }
