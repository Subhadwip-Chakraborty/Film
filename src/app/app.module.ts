import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { DirectorsComponent } from './directors/directors.component';
import { HeaderComponent } from './header/header.component';
import { FilmComponent } from './film/film.component';
import { AboutComponent } from './about/about.component';
import { DetailsService } from './details.service';
import { DeleteFilmComponent } from './delete-film/delete-film.component';
import { UpadteDetailsComponent } from './upadte-details/upadte-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DirectorsComponent,
    HeaderComponent,
    FilmComponent,
    AboutComponent,
    DeleteFilmComponent,
    UpadteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    

  ],
  providers: [FormBuilder,DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
