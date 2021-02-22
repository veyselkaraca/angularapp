import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MysecondcomponentComponent } from './mysecondcomponent/mysecondcomponent.component';

const routes: Routes = [
  {
    path:"second",
    component:MysecondcomponentComponent
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
