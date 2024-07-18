import { Component, inject, Signal, signal } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import {  MovieService } from '../../services/movie.service';
import { Movie } from '../../types/types';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-filter-view',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './filter-view.component.html',
  styleUrl: './filter-view.component.css'
})
export class FilterViewComponent {
  protected movieList!:Signal<Movie[]>;

  constructor( private movieService: MovieService) {
    this.movieList = this.movieService.getMovies();
   }




  runSearch(term = "", event?: Event) {
    event?.preventDefault();
    console.log(term);
  }

}
