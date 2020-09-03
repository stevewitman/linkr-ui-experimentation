import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

import { SharedModule } from '../../shared/shared.module';
import { AddLinkComponent } from './add-link/add-link.component';
import { LinksToolbarComponent } from './links-toolbar/links-toolbar.component';

@NgModule({
  declarations: [
    LinksComponent,
    AddLinkComponent,
    LinksToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    LinksRoutingModule,
    SharedModule,
  ]
})
export class LinksModule { }
