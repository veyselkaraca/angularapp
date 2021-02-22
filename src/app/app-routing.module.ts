import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Error/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"**",
    component:NotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
