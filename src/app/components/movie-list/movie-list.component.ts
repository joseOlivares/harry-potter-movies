import { Component, input } from '@angular/core';
import { Movie } from '../../types/types';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [DurationPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movieList=input.required<Movie[]>();

}
