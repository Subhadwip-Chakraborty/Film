import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DeleteFilmComponent } from './delete-film/delete-film.component';
import { DirectorsComponent } from './directors/directors.component';
import { FilmComponent } from './film/film.component';
import { UpadteDetailsComponent } from './upadte-details/upadte-details.component';

const routes: Routes = [
  {
  path:"",
  redirectTo:'/films',
  pathMatch:"full"
  },
  {
    path:'films',
    component:FilmComponent
  },
  {
    path:'directors',
    component:DirectorsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'delete-film',
    component:DeleteFilmComponent
  },
  {
    path:'update-details',
    component:UpadteDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
