import { Component, inject, Input } from '@angular/core';
import { MovieDetails } from '../../types/types';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MillionPipe } from "../../pipes/million.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [AsyncPipe, MillionPipe, DurationPipe, NgOptimizedImage],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  private activatedRoute = inject(ActivatedRoute);

  movieDetails$!: Observable<MovieDetails>;

 goBack() {
    history.back();
 }

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //this.movieDetails$=this.activatedRoute.data.pipe(map(data => data['movieDetailsRslv'] as MovieDetails),take(1));
  this.movieDetails$= this.activatedRoute.data.pipe(map(data => data['movieDetails'] ),take(1));
}

}
