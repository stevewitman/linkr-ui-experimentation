import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindersRoutingModule } from './reminders-routing.module';
import { RemindersComponent } from './reminders.component';


@NgModule({
  declarations: [RemindersComponent],
  imports: [
    CommonModule,
    RemindersRoutingModule
  ],
  exports: [RemindersComponent]
})
export class RemindersModule { }
