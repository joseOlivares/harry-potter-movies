import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Movie } from '../types/types';
import { Observable } from 'rxjs';
import { API_URL } from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private lastMovieList= signal<Movie[]>([]); ;


  constructor(private http: HttpClient) { }

  getMovies(): Signal<Movie[]> {
    this.http.get<Movie[]>( `${API_URL}/movies` )
    .subscribe( data => {
      this.lastMovieList.set(data);
      console.log(this.lastMovieList()[0]);
    });
    return this.lastMovieList.asReadonly();
  }

}
