import { Component } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-filter-view',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './filter-view.component.html',
  styleUrl: './filter-view.component.css'
})
export class FilterViewComponent {


  runSearch(term = "", event?: Event) {
    event?.preventDefault();
    console.log(term);
  }

}
