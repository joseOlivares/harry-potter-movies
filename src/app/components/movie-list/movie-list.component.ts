import { Component, input } from '@angular/core';
import { Movie } from '../../types/types';
import { DurationPipe } from '../../pipes/duration.pipe';
import { MillionPipe } from '../../pipes/million.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [DurationPipe, MillionPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movieList=input.required<Movie[]>();

}
