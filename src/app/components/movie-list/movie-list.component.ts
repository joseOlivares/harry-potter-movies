import { Component, input } from '@angular/core';
import { Movie, MovieId } from '../../types/types';
import { DurationPipe } from '../../pipes/duration.pipe';
import { MillionPipe } from '../../pipes/million.pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [DurationPipe, MillionPipe, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {


  constructor(private router: Router){}

  movieList=input.required<Movie[]>();


  showDetails(id: MovieId = "") {
    //console.log(id);
    this.router.navigate(['details/' + id]);
  }

}
