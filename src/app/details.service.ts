import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
   url:any
  constructor(private http:HttpClient) { }

  private films=`/api/films`
  private directors=`/api/directors`

  getFilms():Observable<any>{
    return this.http.get<any>(this.films)
    // .pipe(catchError(this.errorHandler))
  }

  getDirectors():Observable<any>{
    return this.http.get<any>(this.directors)
  }

  postFilms(films:any){
    console.log(this.films)
    return this.http.post<any>(this.films,films)
  }

  postDirectors(director:any){
    return this.http.post<any>(this.directors,director)
  }

  getFilm(name:any):Observable<any>{
    return this.http.get(this.films, name);
  }

  updateDirector(name:any):Observable<any>{
    
    return this.http.patch(this.directors,name)
  }

  deleteFilm(name:any):Observable<any>{
    return this.http.delete(`${this.films}/${name}`,name)
  }
}

