import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NotesRoutingModule,
  ]
})
export class NotesModule { }
