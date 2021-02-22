import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';

const routes: Routes = [
  {
    path:"/first",
    component:MyfirstcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
