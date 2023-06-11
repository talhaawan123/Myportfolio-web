import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyskillsComponent } from './myskills.component';

const routes: Routes = [{ path: '', component: MyskillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyskillsRoutingModule { }
