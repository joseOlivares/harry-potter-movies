import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Movie } from '../types/types';
import { API_URL } from '../constants/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private lastMovieList= signal<Movie[]>([]); ;


  constructor(private http: HttpClient) { }

  /*
  getMovies(): Signal<Movie[]> {
    this.http.get<Movie[]>( `${API_URL}/movies` )
    .subscribe( data => {
      this.lastMovieList.set(data);
    });
    return this.lastMovieList.asReadonly();
  }*/

  getAllMovies(): Observable<Movie[]> {
   return this.http.get<Movie[]>( `${API_URL}/movies` );
  }

}
