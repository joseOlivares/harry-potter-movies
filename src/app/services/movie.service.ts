import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { Movie, MovieDetails, MovieId } from '../types/types';
import { API_URL } from '../constants/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private lastMovieList= signal<Movie[]>([]); ;

  private http=inject(HttpClient);

  constructor() { }

  getAllMovies(): Observable<Movie[]> {
   return this.http.get<Movie[]>( `${API_URL}/movies` );
  }

  getMovieDetails(id: MovieId): Observable<MovieDetails> {
    //console.log("Service -- solicitando id= "+id)

    return this.http.get<MovieDetails>( `${API_URL}/movies/${id}` );
  }

}
