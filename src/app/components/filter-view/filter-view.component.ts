import { Component, inject, Signal, signal } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import {  MovieService } from '../../services/movie.service';
import { Movie } from '../../types/types';
import {toObservable} from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-filter-view',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './filter-view.component.html',
  styleUrl: './filter-view.component.css'
})
export class FilterViewComponent {
  protected movieList!:Signal<Movie[]>;

  protected filteredList = signal<Movie[]>([]);

  private movieService2 = inject(MovieService);
  private filteredList$ = toObservable(this.movieService.getMovies());



  constructor( private movieService: MovieService) {
    this.movieList = this.movieService.getMovies();
    this.filteredList$.subscribe( data => this.filteredList.update(() => data));
   }



  runFilter(term = "", event?: Event) {
    event?.preventDefault();
    console.log(term);

    this.movieList().map( movieList => {
      if(movieList.title.toLowerCase().includes(term.toLowerCase())){ //if term is included in title
        const index=this.filteredList().indexOf(movieList);
        if(index===-1){ //if not exist in filteredList, it will be added
          this.filteredList.update(filteredList => [...filteredList, movieList]);
        }

      }else{
        //if term is not included in title
        this.filteredList.update( movies=> movies.filter( movie => movie.title !== movieList.title));
        console.log("entra al else del filter")
      }

      console.log(this.filteredList());


    });

  }

}

