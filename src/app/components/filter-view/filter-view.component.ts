import { Component, signal } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-filter-view',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './filter-view.component.html',
  styleUrl: './filter-view.component.css'
})
export class FilterViewComponent {

  protected movieList = signal<Movie[]>([]);
  protected filteredList = signal<Movie[]>([]);

  constructor( private movieService: MovieService) {
    this.movieService.getAllMovies().pipe(takeUntilDestroyed()).subscribe( data => {
      this.movieList.update(() => data);
      this.filteredList.update(() => data);
    });
   }



  runFilter(title = "",year="-1", event?: Event) {
    event?.preventDefault();
    console.log(title, year);
    const searchTitle=title.toLowerCase();


    //let filteredArray= this.movieList()
    //.filter( movie=>(movie.title.toLowerCase().includes(searchTitle) && movie.release_date.getFullYear().toString().includes(year)) );

    let filteredArray= this.movieList().filter(movie=>{

      if(movie.title.toLowerCase().includes(searchTitle) && movie.release_date.includes(year)){
        return true;
      }
      return false;
    });

    console.log(filteredArray);
    this.filteredList.update(()=>[...filteredArray]);

/*
    this.movieList().map( movieList => {
      if(movieList.title.toLowerCase().includes(title.toLowerCase())){ //if term is included in title
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
*/
  }

}

