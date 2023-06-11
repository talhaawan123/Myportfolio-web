import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyskillsRoutingModule } from './myskills-routing.module';
import { MyskillsComponent } from './myskills.component';


@NgModule({
  declarations: [
    MyskillsComponent
  ],
  imports: [
    CommonModule,
    MyskillsRoutingModule
  ]
})
export class MyskillsModule { }
