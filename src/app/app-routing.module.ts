import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [{path:"navbar",component: NavbarComponent} ,{ path: '', loadChildren: () => import('./firstpage/firstpage.module').then(m => m.FirstpageModule) }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'myskills', loadChildren: () => import('./myskills/myskills.module').then(m => m.MyskillsModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
