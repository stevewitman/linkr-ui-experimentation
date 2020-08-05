import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [
    LinksComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LinksRoutingModule,
  ]
})
export class LinksModule { }
